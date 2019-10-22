'use strict'

const ProductsService = require('../services/products.service');
const productsService = new ProductsService();

class productsController {
    async get(req, res) {
        const productId = req.params.productId;
        let response;

        try {
            response = await productsService.get(productId);
            if(!response) return res.status(404).send({message: 'No existe ningun producto con ese id'});   
        } catch (e) {
            res.status(502).send({
                message: e
            });
        }

        return res.json({
            status: 200,
            message: response
        });
    }

    async list(req, res) {
        let response;
        try {
            response = await productsService.list({});
            if(!response) res.status(404).send('Todavia no se creo ningun usuario')
        } catch(e) {
            res.status(502).send({
                messgae: e
            });
        }

        return res.json({
           status: 200,
           message: response 
        });
    }

    async create(req, res) { 
        const payload = req.body;
        let response;
        
        try {
            response = await productsService.create(payload);
        } catch (e) {
            res.status(502).send({
                message: e
            });
        }

        return res.json({
            status: 200,
            message: response
        });
    }

    async delete(req, res) {
        const productId = req.params.productId;
        let response;

        try {
            response = await productsService.delete(productId); 
            if(!response) res.status(404).send('No se encontro ningun producto');
        } catch (e) {
            res.status(502).send({
                message: e
            });
        }

        return res.json({
            status: 200,
            message: response
        });
    }

    async update(req, res) {
        const productId = req.params.productId;
        const payload = req.body;
        let response;

        try {
            response = await productsService.update(productId, payload);
            if(!response) res.status(404).send('No se encontro ningun producto');
        } catch (e) {
            res.status(502).send({
                message: e
            });
        }

        return res.json({
            status: 200,
            message: response
        });
    }
}

module.exports = productsController;