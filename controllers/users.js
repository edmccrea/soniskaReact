let User = require('../models/user.model');
const passport = require('passport');

module.exports.renderSignupForm = (req, res) => {
    res.render('users/signup')
}

module.exports.signup = async (req, res) => {
    try {
    const { username, email, password } = req.body;
    const user = new User({ username, email });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, err => {
        if(err) return next(err);
         // req.flash('success', 'Welcome to Sonsiska!')
        res.redirect('/signedup')
    })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/signup');
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render('users/login')
}

module.exports.renderSignedup = (req, res) => {
    res.render('users/signedup')
}

module.exports.login = (req, res) => {
    // req.flash('success', 'Welcome Back!');
    const redirectUrl = req.session.returnTo || '/';
    delete req.session.returnTo;
    res.redirect('/')
}

module.exports.logout = (req, res) => {
    req.logout();
    req.flash('success', 'Goodbye!')
    res.redirect('/');
}