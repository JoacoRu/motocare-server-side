const jwt = require('jsonwebtoken');
const config = require('../config/index').jwt;

module.exports = function (token) {
    try {
        return jwt.verify(token, config.privateKey);
    } catch (e) {
        return e;
    }
}