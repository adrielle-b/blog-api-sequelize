const route = require('express').Router();
const validateToken = require('../middlewares/validateToken');
const { categoriesController } = require('../controllers');

route.post('/', validateToken, categoriesController.insert);
route.get('/', validateToken, categoriesController.getAll);

module.exports = route;