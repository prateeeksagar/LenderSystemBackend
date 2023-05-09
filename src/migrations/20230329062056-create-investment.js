"use strict";

const { sequelize } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Investments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "Users",
          key: "uid",
          as: "UserId",
        },
      },
      PlanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      amount_Invested: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      opt_status: {
        type: Sequelize.STRING,
        defaultValue: "N",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "User",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedBy: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "User",
      },
      isDeleted: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "N",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Investments");
  },
};
