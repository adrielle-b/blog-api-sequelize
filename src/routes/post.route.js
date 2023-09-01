const route = require('express').Router();
const { postController } = require('../controllers');
const { validateFieldsPost } = require('../middlewares/validateFieldsPost');
const validateToken = require('../middlewares/validateToken');

route.post('/', validateToken, validateFieldsPost, postController.insert);
route.get('/', validateToken, postController.getAll);
route.get('/:id', validateToken, postController.getById);

module.exports = route;