const productsModel = require('../models/products.model');


class productsService {
    async get(productId) {
        return productsModel.findOne(productId);
    }

    async list(search = {}) {
        return productsModel.find(search);
    }

    async create(payload) {
        let {title, description, marca, modelo, ano, estado, kilometraje, precio, moneda, cilindrada, user} = payload;
        payload = {title, description, marca, modelo, ano, estado, kilometraje, precio, moneda, cilindrada, user};
        
        const Product = new productsModel(payload);

        return Product.save();
    }

    async delete(productId) {
        return productsModel.findByIdAndDelete(productId);
    }

    async update(productId, payload) {
        return productsModel.findOneAndUpdate(productId, payload);
    }
}


module.exports = productsService;