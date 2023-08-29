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

module.exports = {
  insert,
  getAll,
};