const route = require('express').Router();
const { postController } = require('../controllers');
const { validateFieldsPost, 
    validateFieldsPostUpdate } = require('../middlewares/validateFieldsPost');
const validateToken = require('../middlewares/validateToken');

route.post('/', validateToken, validateFieldsPost, postController.insert);
route.get('/', validateToken, postController.getAll);
route.get('/search', validateToken, postController.search);
route.get('/:id', validateToken, postController.getById);
route.put('/:id', validateToken, validateFieldsPostUpdate, postController.update);
route.delete('/:id', validateToken, postController.remove);

module.exports = route;