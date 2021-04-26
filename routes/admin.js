const router = require('express').Router();
const catchAsync = require('../utilities/catchAsync');
const admin = require('../controllers/admin')
// const passport = require('passport');
// const ExpressError = require('../utilities/ExpressError');
const { isLoggedIn, validateAdmin } = require('../middleware')

router.get('/', isLoggedIn, validateAdmin, admin.renderOverview);

router.get('/newuploads', isLoggedIn, validateAdmin, catchAsync(admin.renderNewUpload));

router.route('/inprogress')
    .get(isLoggedIn, validateAdmin, catchAsync(admin.renderInProgress))

router.get('/completed', isLoggedIn, validateAdmin, catchAsync(admin.renderCompleted));

router.get('/messages', isLoggedIn, validateAdmin, admin.renderMessages);

router.get('/users', isLoggedIn, validateAdmin, catchAsync(admin.usersIndex));               

router.get('/users/:id/edit', isLoggedIn, validateAdmin, catchAsync(admin.renderEditForm));

router.route('/users/:id')
    .get(isLoggedIn, validateAdmin, catchAsync(admin.showUser))
    .put(isLoggedIn, validateAdmin, catchAsync(admin.editUser))
    .delete(isLoggedIn, validateAdmin, catchAsync(admin.deleteUser));

module.exports = router;