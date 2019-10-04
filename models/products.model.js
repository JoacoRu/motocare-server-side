const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productsSchema = new Schema({
    title: {
        type: String,
        required: [true, 'El titulo es requerido'],
        min: 40,
        max: 130
    },
    description: {
        type: String,
        required: [true, 'La descripcion es requerida']
    },
    marca: {
        type: String,
        required: [true, 'La marca es requerida']
    },
    modelo: {
        type: String,
        required: [true, 'El modelo es requerido']
    },
    kilometros: {
        type: Number,
        required: [true, 'El kilometraje es requerido'],
    },
    precio: {
        type: Number,
        required: [true, 'El precio es requerido']
    },
    moneda: {
        type: Number,
        required: [true, 'La moneda es requerida'],
    }, // Si es 1 = usd, si es 0 = pesos
    cilindrada: {
        type: Number,
        required: [true, 'Es necesario ingresar un valor']
    },
    user: {
        type: String,
        required: [true, 'EL usuario es requerido'],
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
    type: {
        type: Number,
        required: [true, 'El tipo de producto es requerido'],
        default: 0
    }, // Si es 0 es una publicacion normal, si es 1 es destacada
    img: {
        type: Object,
        required: [true, 'Es necesario al menos una imagen'],
        default: null
    },
    state: {
        type: Number,
        required: [true, 'La publicacion tiene que tener un estado ej: finalizada/en curso'],
        default: 0
    }
});

module.exports = mongoose.model('products', productsSchema);