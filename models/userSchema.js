const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    "FirstName": { type: String, required: true },
    "LastName": { type: String, required: true}, 
    "Email": { type: String, required: true },
    "Password": { type: String, required: true }, 
    "Role": { type: String, required: false }, 
 
}) 

const User = mongoose.model('User', userSchema); 
module.exports = User;