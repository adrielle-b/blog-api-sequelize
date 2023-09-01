const { loginService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHttp');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { status, data } = await loginService.login(email, password);
  
    res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  login,
};