const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productsSchema = new Schema({
    title: String,
    description: String,
    marca: String,
    modelo: String,
    ano: Number,
    estado: Number, // Si el estado es 0 es nueva, si es 1 es usado
    kilometraje: Number,
    precio: Number,
    moneda: Number, // Si es 1 = usd, si es 0 = pesos
    cilindrada: Number,
    user: String
});

module.exports = mongoose.model('products', productsSchema);