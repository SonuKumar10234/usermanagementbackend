const mongoose = require('mongoose');

//Creating User Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: String,
    phoneNumber: String,
    address: {
        type: String,
        trim: true
    }
})


//defining model
const Users = mongoose.model('users', userSchema);

module.exports = Users;
