const route = require('express').Router();
const validateToken = require('../middlewares/validateToken');
const { categoriesController } = require('../controllers');

route.post('/', validateToken, categoriesController.insert);

module.exports = route;