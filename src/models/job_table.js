"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job_Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job_Table.init(
    {
      userId: { type: DataTypes.INTEGER },
      agentId: { type: DataTypes.INTEGER, allowNull: true },
      status: {
        type: DataTypes.STRING,
        defaultValue: "Initiated",
        allowNull: true,
      },
      jobStart: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      jobEnd: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Job_Table",
    }
  );
  return Job_Table;
};
