"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Sessions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      creatorName: {
        type: Sequelize.STRING,
      },
      sessionTypeId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "SessionTypes",
          key: "id",
          as: "sessionTypeId",
        },
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Sessions");
  },
};
