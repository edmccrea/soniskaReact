module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        req.flash('error', "You do not have access to this page");
        return res.redirect('/login');
    }
    next()
};

module.exports.validateAdmin = async(req, res, next) => {
    if(!req.user.isAdmin) {
        return res.redirect('/')
    }
    next()
};

module.exports.checkFreeTest = async(req, res, next) => {
    if(req.user.freeTest.url) {
        return res.redirect('/')
    }
    next()
};