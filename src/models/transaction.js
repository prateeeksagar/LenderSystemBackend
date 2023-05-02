'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init({
    uid: DataTypes.INTEGER,
    txn_type: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    txn_referenceId: DataTypes.INTEGER,
    txn_status: DataTypes.STRING,
    createdOn: DataTypes.DATE,
    createdBy: DataTypes.STRING,
    updatedOn: DataTypes.DATE,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};