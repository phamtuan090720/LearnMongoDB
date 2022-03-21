const mongoose = require('mongoose');
const {ProfileShema} = require('./Profile.model.js');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile : {
        type:ProfileShema
    }
})
const User = new mongoose.model("User", UserSchema)
module.exports = {
    UserSchema, User
}