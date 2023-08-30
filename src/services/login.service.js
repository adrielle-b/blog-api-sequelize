const { User } = require('../models');
const { generateToken } = require('../utils/generateToken');

const login = async (email, password) => {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
        return {
            status: 'BAD_REQUEST', data: { message: 'Invalid fields' },
        };
    }

    const tokenJwt = generateToken({ email, userId: user.id });
    
    return { status: 'SUCCESSFUL', data: { token: tokenJwt } };
};

module.exports = {
    login,
};