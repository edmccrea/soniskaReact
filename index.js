if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const axios = require('axios')
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStratergy = require('passport-local');
const User = require('./models/user.model');
const helmet = require('helmet');
const MongoDBStore = require('connect-mongo')(session);

const mongoSanitize = require('express-mongo-sanitize');

const app = express();
const port = process.env.PORT || 5000;

const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@soniska.sfmfe.mongodb.net/soniska?retryWrites=true&w=majority` || 'mongodb://127.0.0.1:27017/soniska';
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use(cors());
app.use(express.json());

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize({
    replaceWith: '_'
}));

const secret = process.env.SECRET || 'notagoodsecret'

const store = new MongoDBStore({
    url: dbUrl,
    secret,
    touchAfter: 24 * 60 * 60,
});

store.on('error', function(e){
    console.log('Store Error', e);
})

const sessionConfig = {
    store,
    name: 'session',
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
}
app.use(session(sessionConfig));
app.use(flash());
app.use(helmet({ contentSecurityPolicy: false }));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    app.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const accountRouter = require('./routes/account');

app.use('/', usersRouter);
app.use('/admin', adminRouter);
app.use('/account', accountRouter);

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/faq', (req, res) => {
    res.render('info/faq')
})

app.get('/pricing', (req, res) => {
    res.render('info/pricing')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});