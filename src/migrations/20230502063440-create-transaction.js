"use strict";

// const { all } = require("../routes/v1");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Transactions", {
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
          as: "userId",
        },
      },
      txn_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      flowType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      txn_referenceId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      balance: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      txn_status: {
        type: Sequelize.STRING,
        defaultValue: "pending",
      },
      createdBy: {
        type: Sequelize.STRING,
        defaultValue: "user",
      },

      updatedBy: {
        type: Sequelize.STRING,
        defaultValue: "user",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Transactions");
  },
};
