const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
  return res.status(401).json({ message: 'Token not found' }); 
  }

  const token = authorization.split(' ')[1];

  try {
   const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
   req.user = tokenDecode;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;