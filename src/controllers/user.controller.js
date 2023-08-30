const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHttp');

const insert = async (req, res) => {
  const { status, data } = await userService.insert(req.body);

  res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await userService.getAll();

  res.status(mapStatusHTTP(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getById(id);

  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  insert,
  getAll,
  getById,
};