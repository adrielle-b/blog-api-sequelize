const Joi = require('joi');

const message = 'Some required fields are missing';

const validateFieldsJoi = (body) => Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
    }).error(new Error(message)).validate(body);

module.exports = validateFieldsJoi;