const jwt = require('jsonwebtoken');
const config = require('../config').jwt;

module.exports = function (req, res, next) {
   const token = req.header('x-auth-token');
   if (!token) return res.status(401).send('Acceso denegado. Clave incorrecta.');

   try {
       const decoded = jwt.verify(token, config.privateKey);
       req.user = decoded;
       next();
   }
   catch(ex) {
       res.status(400).send('Clave incorrecta')
   }
}