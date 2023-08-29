const route = require('express').Router();
const { userController } = require('../controllers');
const { validateDisplayName, 
    validateEmail, validatePassword } = require('../middlewares/validateFieldsUser');

route.post('/', validateDisplayName, validateEmail, validatePassword, userController.insert);

module.exports = route;