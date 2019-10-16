'use strict'

const NewService = require('../services/news.service');
const newsService = new NewService();

class NewsController {
    async get(req, res) {
        const newId = req.params.newId;
        let response;

        try {
            response = await newsService.get(newId);
            if(!response) return res.status(404).send({message: 'No se encontro ninguna noticia'});
        } catch (e) {
            res.status(502).send({
                message: e
            });
        }

        return res.send({
            status: 200,
            message: response
        });
    }

    async list(req, res) {
        let response;

        try {
            response = await newsService.list();
            if(!response) return res.status(404).send({message: 'No hay ninguna noticia'});
        } catch (e) {
            res.status(503).send({message: e});
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
            response = await newsService.create(payload);
        } catch (e) {
            res.status(503).send({message: e});
            console.log('entre')           
        }

        return res.send({
            status: 200,
            message: 'Noticia creada'
        });
    }

    async update(req, res) {
        const id = req.params;
        const payload = req.body;
        let response;

        try {
            response = await newsService.update(id, payload);
            if(!response) return res.status(404).send({message: 'Noticia no encontrada'});
        } catch (e) {
            res.status(503).send({message: e});
        }

        return res.send({
            status: 200,
            message: response
        });
    }

    async delete(req, res) {
        const id = req.params;
        let response;

        try {
            response = await newsService.delete(id);
            if(!response) return res.status(404).send({message: 'Noticia no encontrada'});
        } catch (e) {
            res.status(503).send({message: e});
        }

        return res.send({
            status: 200,
            message: response
        });
    }
}

module.exports = NewsController;