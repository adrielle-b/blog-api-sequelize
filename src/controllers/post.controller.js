const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHttp');

const insert = async (req, res) => {
    try {
    const { status, data } = await postService.insert(req.user, req.body);
  
    res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
};

module.exports = {
    insert,
};