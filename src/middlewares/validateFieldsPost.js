const validateFieldsJoi = require('../utils/validatePostJoi');

const validateFieldsPost = (req, res, next) => {
  const { error } = validateFieldsJoi(req.body);
    if (error) return res.status(400).json({ message: error.message });

  next();
};

module.exports = {
    validateFieldsPost,
};