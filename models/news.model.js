const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    src: {
        type: Array,
        required: [true, 'Es necesario tener algunas fotos...']
    },
    title: {
        type: String,
        required: [true, 'Es necesario tener un titulo']
    },
    description: {
        type: String,
        required: [true, 'Es necesario tener una descripcion']
    }
});

module.exports = mongoose.model('News', NewsSchema);