const mongoose = require('mongoose');

const ProfileShema = new mongoose.Schema({
    fristName: { type: String, required: true },
    lastName : {
        type:String,
        required:true
    }
})
const Profile = new mongoose.model("Profile", ProfileShema)
module.exports = {
    ProfileShema, Profile
}