const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: String,
    email: String,
    name: String,
    lastname: String,
    password: String,
    user_type: Number,
    phone: Number
});

module.exports = mongoose.model('users', userSchema);