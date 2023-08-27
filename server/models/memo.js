'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Memo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Memo.belongsToMany(models.User, { through: models.History, foreignKey: "MemoId" })
      Memo.belongsToMany(models.Admin, { through: models.History, foreignKey: "MemoId" })
      Memo.belongsToMany(models.Order, { through: models.History, foreignKey: "MemoId" })
    }
  }
  Memo.init({
    vendorName: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    eventName: DataTypes.STRING,
    eventDate: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    authorSignature: DataTypes.STRING,
    vendorSignature: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Memo',
  });
  return Memo;
};