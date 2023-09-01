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

const getAll = async (req, res) => {
    try {
        const { status, data } = await postService.getAll();
        res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, data } = await postService.getById(id);
        res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const { userId } = req.user;

    try {
        const { status, data } = await postService.update(id, title, content, userId);
        res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
};

module.exports = {
    insert,
    getAll,
    getById,
    update,
};