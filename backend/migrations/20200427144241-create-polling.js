"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Polling", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userName: {
        type: Sequelize.STRING,
      },
      poll: {
        type: Sequelize.STRING,
      },
      sessionId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Sessions",
          key: "id",
          as: "sessionId",
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
    return queryInterface.dropTable("pollings");
  },
};
