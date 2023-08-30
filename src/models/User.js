module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      displayName: {
          type: DataTypes.STRING,
          allowNull: false
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      image: {
          type: DataTypes.STRING,
      }
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });

    user.associate = (models) => {
        user.hasMany(models.BlogPost, {
            foreignKey: 'userId', as: 'blogPosts'
        })
    }
  
    return user;
  };