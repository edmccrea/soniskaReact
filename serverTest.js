if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
const secret = process.env.SECRET || 'notagoodsecret';

const dbUrl =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@soniska.sfmfe.mongodb.net/soniska?retryWrites=true&w=majority` ||
  'mongodb://127.0.0.1:27017/soniska';
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

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/users'));
app.use('/admin', require('./routes/admin'));
app.use('/account', require('./routes/account'));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
