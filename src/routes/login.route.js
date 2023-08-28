const route = require('express').Router();
const { loginController } = require('../controllers');
const validateFieldsLogin = require('../middlewares/validateFieldsLogin');

route.post('/', validateFieldsLogin, loginController.login);

module.exports = route;