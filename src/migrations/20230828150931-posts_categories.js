'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', { 
      postId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'post_id',
        references: { model: 'blog_posts', id: 'id' },
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',
      },
      categoryId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: { model: 'categories', id: 'id' },
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
