const routes = require('express').Router();

//Test

routes.get('/status', (req, res) => res.send('May the force be with you :)'));


// Users
const UsersController = require('../controllers/users.controller');
const userController = new UsersController();

routes.get('/users/:userId', userController.get.bind(userController));
routes.post('/users/create', userController.create.bind(userController));
routes.get('/users', userController.list.bind(userController));
routes.delete('/users/:userId', userController.delete.bind(userController));
routes.put('/users/:userId', userController.update.bind(userController));




module.exports = routes;
