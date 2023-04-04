"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Job_Tables", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      agentId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "Initiated",
        allowNull: true,
      },
      jobStart: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      jobEnd: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: NaN,
      },
      createdBy: {
        type: Sequelize.INTEGER,
        defaultValue: userId,
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Job_Tables");
  },
};
