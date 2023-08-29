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

module.exports = {
    insert,
};