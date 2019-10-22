const QuestionServices = require('../services/questions.services');
const questionServices = new QuestionServices();

class QuestionController {
    async get(req, res) {
        const publicationId = req.params.publicationId;
        let response;
        try {
            response = await questionServices.get(publicationId);
            if(!response) res.status(404).send('No hay resultados')
        } catch (e) {
            res.status(503).send(e);
        }

        return res.send({
            status: 200,
            message: response
        });
    }

    async create(req, res) {
        const payload = req.body;
        let response;

        try {
          response = await questionServices.create(payload);
        } catch (e) {
            res.status(503).send(e)            
        }

        return res.send({
            status: 200,
            response: 'pregunta creada con exito'
        });
    }

    async update(req, res) {
        const questionId = req.params.questionId;
        const payload = req.body;
        let response;

        try {
            response = await questionServices.update(questionId, payload);
            if(!response) res.status(404).send('No se encontro ninguna pregunta');
        } catch (e) {
            res.status(503).send(e)
        }

        return res.send({
            status: 200,
            message: 'La pregunta fue modificada'
        })
    }

    async delete(req, res) {
        const questionId = req.params.questionId;
        let response;
        try {
            response = await questionServices.delete(questionId);
            if(!response) return res.status(404).send('No se encontro ninguna pregunta');
        } catch (e) {
            res.status(503).send(e)
        }

        return res.send({
            status: 200,
            message: 'Se elimino la pregunta exitosamente'
        })
    }
}

module.exports = QuestionController;
