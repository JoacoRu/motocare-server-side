const NewsModel = require('../models/news.model');

class NovedadesService {
    async get(newId) {
        return NewsModel.findOne(newId);
    }

    async list(search = {}) {
        return NewsModel.find(search);
    }

    async create(payload) {
        let {src, title, description} = payload;
        payload = {src, title, description};
        const New = new NewsModel(payload);
        return New.save();
    }

    async update(newId, payload) {
        return NewsModel.findOneAndUpdate(newId, payload);
    }

    async delete(newId) {
        return NewsModel.findOneAndDelete(newId);
    }
}

module.exports = NovedadesService;