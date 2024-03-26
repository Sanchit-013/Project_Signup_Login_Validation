const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId:String,
    name: String,
    email: String,
    phone: String,
    pass: String,
    password: String,
});

module.exports=mongoose.model('user', UserSchema)