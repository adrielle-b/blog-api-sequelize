module.exports = (sequelize, DataTypes) => {
    const postCategory = sequelize.define('PostCategory', {
        postId: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'post_id',
            references: { model: 'blog_posts', id: 'id' }
        },
        categoryId: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'category_id',
            references: { model: 'categories', id: 'id' }
        }
    },
    {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
    });

    postCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: postCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId'
        });
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blogPosts',
            through: postCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId'
        });
    };
  
    return postCategory;
  };