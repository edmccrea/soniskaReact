const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadSchema = new Schema({});

module.exports = mongoose.model('Upload', UploadSchema);