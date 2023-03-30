"use strict";
const { Model } = require("sequelize");
const { Sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.UserDetail, {
        foreignKey: "uid",
      });
      this.hasOne(models.Investment, {
        foreignKey: "uid",
      });
    }
  }
  User.init(
    {
      uid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      authId: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "NotCreated",
      },
      // authId: DataTypes.STRING,
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      emailId: { type: DataTypes.STRING, allowNull: false, unique: true },

      mobileNo: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      // isActive: DataTypes.STRING,
      // createdOn: DataTypes.DATE,
      // createdBy: DataTypes.STRING,
      // updatedOn: DataTypes.DATE,
      // updatedBy: DataTypes.STRING,
      // isDeleted: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
