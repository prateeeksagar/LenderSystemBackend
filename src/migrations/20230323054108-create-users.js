"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      authId: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "Not Created",
      },
      panId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isActive: {
        type: Sequelize.STRING,
        defaultValue: "N",
      },
      isDeleted: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "N",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdBy: {
        type: Sequelize.STRING,
        defaultValue: "user",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedBy: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "user",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
