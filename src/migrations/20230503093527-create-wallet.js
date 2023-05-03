"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("wallets", {
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
      amount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      locked: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      updatedBy: {
        type: Sequelize.STRING,
        defaultValue: "user",
      },
      createdBy: {
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
    await queryInterface.dropTable("wallets");
  },
};
