const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    "FirstName": { type: String, required: true },
    "LastName": { type: String, required: true}, 
    "Email": { type: String, required: true },
    "Password": { type: String, required: true }, 
    "Role": { type: Date, required: false }, 
 
}) 

const user = mongoose.model('user', userSchema); 
module.exports = user;