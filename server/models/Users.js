const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    tel: {
        type: Number,
    },
    password1: {
        type: String,
        required: true
    },
    password2: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel;