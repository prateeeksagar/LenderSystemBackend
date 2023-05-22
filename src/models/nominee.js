"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Nominee extends Model {
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
  Nominee.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nomineeAadharCard: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nomineePanCard: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nomineeEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      relationWithNominee: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nomineeDOB: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      NomineeAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Nominee",
    }
  );
  return Nominee;
};
