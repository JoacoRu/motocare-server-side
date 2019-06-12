const routes = require('expres').Router();

//Test

routes.get('/status', (req, res) => res.send('May the force be with you :)'));


// Users
const UsersController = require('../controllers/users.controller');
const userController = new UsersController();

routes.get('users/:userId', userController.get.bind(userController));
