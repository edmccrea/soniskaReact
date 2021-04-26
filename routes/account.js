const router = require('express').Router();
const catchAsync = require('../utilities/catchAsync');
const account = require('../controllers/account')
const passport = require('passport');
const ExpressError = require('../utilities/ExpressError');
const { isLoggedIn, checkFreeTest } = require('../middleware')
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.route('/')
    .get(isLoggedIn, account.renderOverview)
    .post(isLoggedIn, upload.single('freetest'), catchAsync(account.uploadFreeTest))

router.get('/upload', isLoggedIn, account.renderUpload);

router.route('/mysongs')
    .get(isLoggedIn, account.renderMysongs)
    .post(isLoggedIn, upload.array('audioUpload'), catchAsync(account.uploadAudio));

router.get('/messages', isLoggedIn, account.renderMessages);

router.route('/freetest')
    .get(isLoggedIn, checkFreeTest, account.renderFreeTest);

module.exports = router;