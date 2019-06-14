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

    }

    async create(req, res) { 

    }

    async delete(req, res) {

    }

    async update(req, res) {
        
    }
}

module.exports = productsController;