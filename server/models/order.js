'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.Memo, { through: models.History, foreignKey: "OrderId" })
      Order.belongsToMany(models.User, { through: models.History, foreignKey: "OrderId" })
      Order.belongsToMany(models.Admin, { through: models.History, foreignKey: "OrderId" })
    }
  }
  Order.init({
    name: DataTypes.STRING,
    vendorName: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    orderMaker: DataTypes.STRING,
    date: DataTypes.STRING,
    priority: DataTypes.STRING,
    executor: DataTypes.STRING,
    image: DataTypes.BLOB,
    duration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};