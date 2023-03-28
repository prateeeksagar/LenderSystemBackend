"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Users",
          key: "uid",
          as: "userId",
        },
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      emailId: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      panId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      aadharId: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      mobileNo: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      EmpType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      postOffice: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pincode: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      District: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bankAccountNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ifscCode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdBy: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "user",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "user",
      },
      isDeleted: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "N",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserDetails");
  },
};
