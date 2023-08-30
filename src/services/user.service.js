const { User } = require('../models');
const { generateToken } = require('../utils/generateToken');

const insert = async (newUser) => {
    const { displayName, email, password, image } = newUser;
    const userExist = await User.findOne({ where: { email } });
    if (userExist) return { status: 'CONFLICT', data: { message: 'User already registered' } };

    await User.create({ displayName, email, password, image });

    const tokenJwt = generateToken({ email });
    return { status: 'CREATED', data: { token: tokenJwt } };
};

const getAll = async () => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return { status: 'SUCCESSFUL', data: users };
};

const getById = async (id) => {
    const findUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!findUser) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };

    return { status: 'SUCCESSFUL', data: findUser };
};

module.exports = {
    insert,
    getAll,
    getById,
};