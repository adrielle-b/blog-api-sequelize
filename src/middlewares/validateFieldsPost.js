const { validateFieldsJoi, validateFieldsJoiUpdate } = require('../utils/validatePostJoi');

const validateFieldsPost = (req, res, next) => {
  const { error } = validateFieldsJoi(req.body);
    if (error) return res.status(400).json({ message: error.message });

  next();
};

const validateFieldsPostUpdate = (req, res, next) => {
  const { error } = validateFieldsJoiUpdate(req.body);
    if (error) return res.status(400).json({ message: error.message });

  next();
};
module.exports = {
    validateFieldsPost,
    validateFieldsPostUpdate,
};