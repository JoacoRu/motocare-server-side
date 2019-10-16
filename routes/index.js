const routes = require('express').Router();

//Test

routes.get('/status', (req, res) => res.send('May the force be with you :)'));


// Users
const UsersController = require('../controllers/users.controller');
const userController = new UsersController();

routes.get('/users/:userId', userController.get.bind(userController));
routes.post('/users', userController.create.bind(userController));
routes.get('/users', userController.list.bind(userController));
routes.delete('/users/:userId', userController.delete.bind(userController));
routes.put('/users/:userId', userController.update.bind(userController));
routes.post('/users/login', userController.auth.bind(userController));
routes.get('/token', userController.isTokenValid.bind(userController));
//Products

const ProductsController = require('../controllers/products.controller');
const productsController = new ProductsController();
const productValidator = require('../middlewares/product');

routes.get('/products/:productId', productsController.get.bind(productsController));
routes.get('/products', productsController.list.bind(productsController));
routes.post('/products', productValidator, productsController.create.bind(productsController));
routes.delete('/products/:productId', productsController.delete.bind(productsController));
routes.put('/products/:productId', productsController.update.bind(productsController));


//Noticias

const NewsController = require('../controllers/news.controller');
const newsController = new NewsController();

routes.get('/news/:newsId', newsController.get.bind(newsController));
routes.get('/news', newsController.list.bind(newsController));
routes.post('/news', newsController.create.bind(newsController));
routes.delete('/news/:newsId', newsController.delete.bind(newsController));
routes.put('/news/:newsId', newsController.update.bind(newsController));


module.exports = routes;
