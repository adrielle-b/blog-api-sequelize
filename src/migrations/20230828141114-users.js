'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {   
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      displayName: {
        type: Sequelize.STRING,
        field: 'display_name',
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => { 
    await queryInterface.dropTable('users');     
  }
};
