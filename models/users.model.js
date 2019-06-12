const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userId: Number,
    username: String,
    email: String,
    name: String,
    lastname: String,
    password: String,
    user_type: Number
});

module.exports = mongoose.model('users', userSchema);