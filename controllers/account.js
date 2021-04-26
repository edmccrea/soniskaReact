let User = require('../models/user.model');

module.exports.renderOverview = (req, res) => {
    res.render('account/overview')
}

module.exports.renderUpload = (req, res) => {
    res.render('account/upload')
}

module.exports.renderMysongs = (req, res) => {
    res.render('account/mysongs')
}

module.exports.renderMessages = (req, res) => {
    res.render('account/messages')
}

module.exports.renderFreeTest = (req, res) => {
    res.render('account/test-master-form')
}

module.exports.uploadFreeTest = async (req, res) => {
    const user = req.user;
    user.freeTest = {url: req.file.path, filename: req.file.filename, uploadName: 'Soniska Free Test Master', status: 'Uploaded'};
    await user.save();
    res.redirect('/');
}

module.exports.uploadAudio = async (req, res) => {
    const user = await req.user;
    const audio = req.files.map(file => ({url: file.path, filename: file.filename, uploadName: req.body.uploadName, status: 'Uploaded'}));
    user.audioFile.push(...audio);
    await user.save();
    res.redirect('/account/mysongs');
}