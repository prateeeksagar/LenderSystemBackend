"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }
  Transaction.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      txn_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      txn_referenceId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      txn_status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
      },
      // createdOn: DataTypes.DATE,
      // createdBy: DataTypes.STRING,
      // updatedOn: DataTypes.DATE,
      // updatedBy: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
