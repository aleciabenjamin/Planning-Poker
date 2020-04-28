"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "SessionTypes",
      [
        {
          title: "Fibonacci",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "T-Shirts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("SessionTypes", null, {});
  },
};
