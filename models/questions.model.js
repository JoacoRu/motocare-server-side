const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionModel = new Schema({
    question: {
        type: String,
        required: [true, 'La pregunta necesita contenido']
    },
    userId: {
        type: String,
        required: [true, 'La pregunta necesita un dueño']
    },
    publicationId: {
        type: String,
        required: [true, 'La pregunta necesita una publicacion']
    }
});

module.exports = mongoose.model('questions', questionModel);