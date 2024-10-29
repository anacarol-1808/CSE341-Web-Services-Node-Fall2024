const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.carolRoute);
routes.get('/felipe', lesson1Controller.felipeRoute);

module.exports = routes;
