module.exports = (sequelize, DataTypes) => {
    const blogPost = sequelize.define('BlogPost', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        content: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'user_id',
            foreignKey: true,
        },
        published: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        timestamps: false,
        tableName: 'blog_posts',
        underscored: true,
    });

    blogPost.associate = (models) => {
        blogPost.belongsTo(models.User, {
            foreignKey: 'userId', as: 'user'
        });
    }
  
    return blogPost;
  };