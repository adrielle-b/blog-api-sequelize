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

const remove = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.user;
  
    const { status, data } = await postService.remove(id, userId);
    if (data) return res.status(mapStatusHTTP(status)).json(data);
    return res.status(mapStatusHTTP(status)).end();
};

const search = async (req, res) => {
    const { q } = req.query;
  
    const { status, data } = await postService.search(q);
  
    res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
    insert,
    getAll,
    getById,
    update,
    remove,
    search,
};