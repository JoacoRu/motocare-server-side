const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'El usuario es requerido']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido']
    },
    name: {
        type: String,
        required: false,
        default: null
    },
    lastname: {
        type: String,
        required: false,
        default: null
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    user_type: {
        type: Number,
        required: [true, 'El tipo de usuario es requerido'],
        default: 0
    },
    phone: {
        type: Number,
        required: false,
        default: null
    }
});

module.exports = mongoose.model('users', userSchema);