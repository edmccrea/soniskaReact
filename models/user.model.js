const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
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
            default: 'None'
        }
    },
    audioFiles: [
        {
            url: String,
            filename: String,
            uploadName: String,
            status: {
                type: String,
                default: 'None'
            }
        }
    ],
}, {
    timestamps: true,
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema);