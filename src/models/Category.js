module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
    name: {
        type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
        tableName: 'categories',
        underscored: true,
    });
  
    return category;
  };