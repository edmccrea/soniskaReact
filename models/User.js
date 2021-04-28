const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isGlobalAdmin: {
      type: Boolean,
      default: false,
    },
    freeTest: {
      url: String,
      filename: String,
      uploadName: String,
      status: {
        type: String,
        default: 'None',
      },
    },
    audioFiles: [
      {
        url: String,
        filename: String,
        uploadName: String,
        status: {
          type: String,
          default: 'None',
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema);
