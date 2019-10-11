const jwt = require('jsonwebtoken');
const config = require('../config').jwt;

module.exports = function (element) {
    var token = jwt.sign(element, config.privateKey, config.algorithm, {expiresIn: '7d'});
    return token;
}