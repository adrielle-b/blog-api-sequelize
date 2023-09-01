const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHttp');

const insert = async (req, res) => {
  try {
    const { status, data } = await userService.insert(req.body);

    res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAll = async (req, res) => {
  try {
    const { status, data } = await userService.getAll();
  
    res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const { status, data } = await userService.getById(id);
  
    res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  insert,
  getAll,
  getById,
};