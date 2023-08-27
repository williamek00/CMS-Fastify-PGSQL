'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.Order, { foreignKey: "OrderId" })
      History.belongsTo(models.User, { foreignKey: "UserId" })
      History.belongsTo(models.Admin, { foreignKey: "AdminId" })
      History.belongsTo(models.Memo, { foreignKey: "MemoId" })
    }
  }
  History.init({
    OrderId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    AdminId: DataTypes.INTEGER,
    MemoId: DataTypes.INTEGER,
    date: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};