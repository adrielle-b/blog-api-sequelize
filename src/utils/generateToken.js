const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (payloadEmail) => {
  const token = jwt.sign(payloadEmail, JWT_SECRET, {
    expiresIn: '1h',
  });

  return token;
};

module.exports = {
  generateToken,
};