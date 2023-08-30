const { Category } = require('../models');

const insert = async (newCategory) => {
    const { name } = newCategory;
    if (!name) return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };
    
    await Category.create({ name });
    const findCategory = await Category.findOne({ where: { name } });

    return { status: 'CREATED', data: findCategory };
};

const getAll = async () => {
    const categories = await Category.findAll();
    
    return { status: 'SUCCESSFUL', data: categories };
};

module.exports = {
    insert,
    getAll,
};