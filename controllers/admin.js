let User = require('../models/user.model');

module.exports.renderOverview = (req, res) => {
    res.render('admin/overview')
}

module.exports.renderNewUpload = async (req, res) => {
    const users = await User.find({});
    res.render('admin/uploads/new-upload', { users })
}

module.exports.renderInProgress = async (req, res) => {
    const users = await User.find({});
    res.render('admin/uploads/inprogress', { users })
}

module.exports.renderCompleted = async (req, res) => {
    const users = await User.find({});
    res.render('admin/uploads/completed', { users })
}

module.exports.renderMessages = (req, res) => {
    res.render('admin/messages')
}

module.exports.usersIndex = async (req, res) => {
    const users = await User.find({})
    res.render('admin/users/usersIndex', { users })
}

module.exports.showUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id)
    res.render('admin/users/show-user', { user })
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id)
    res.render('admin/users/edit-user', { user })
}

module.exports.editUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, {...req.body.user }, { runValidators: true })
    user.save()
    res.redirect(`/admin/users/${user._id}`)
}

module.exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id)
        .then(() => res.redirect('/admin/users'))
        .catch(err => res.status(400).json('Error: ' + err));
}