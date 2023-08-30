const { categoriesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHttp');

const insert = async (req, res) => {
    const { status, data } = await categoriesService.insert(req.body);
  
    res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
    insert,
};