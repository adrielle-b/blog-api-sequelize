const route = require('express').Router();
const { userController } = require('../controllers');
const { validateDisplayName, 
    validateEmail, validatePassword } = require('../middlewares/validateFieldsUser');
const validateToken = require('../middlewares/validateToken');

route.post('/', validateDisplayName, validateEmail, validatePassword, userController.insert);
route.get('/', validateToken, userController.getAll);

module.exports = route;