const router = require('express').Router();
const catchAsync = require('../utilities/catchAsync');
const users = require('../controllers/users')
const passport = require('passport');
const ExpressError = require('../utilities/ExpressError');
let User = require('../models/user.model');
const { isLoggedIn } = require('../middleware')


router.route('/signup')
    .get(users.renderSignupForm)
    .post(catchAsync(users.signup));

router.route('/login')
    .get(users.renderLoginForm)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login);

router.get('/signedup', isLoggedIn, users.renderSignedup);

router.get('/logout', users.logout);

module.exports = router;