const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    red: 'users',
  },
  audioFiles: [
    {
      type: String,
      filename: String,
      uploadName: String,
      status: {
        type: String,
        default: 'None',
      },
    },
  ],
});

module.exports = mongoose.model('upload', UploadSchema);
