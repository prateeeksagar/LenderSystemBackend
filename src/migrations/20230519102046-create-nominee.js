"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Nominees", {
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
      fullname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nomineeAadharCard: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nomineePanCard: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nomineeEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      relationWithNominee: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nomineeDOB: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      NomineeAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdBy: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "user",
      },
      updatedBy: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "User",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Nominees");
  },
};
