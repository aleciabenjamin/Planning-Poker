"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("Sessions", "uuid", {
        type: Sequelize.DataTypes.STRING,
      })
      .then(() => {
        queryInterface.addConstraint("Sessions", ["uuid"], {
          type: "unique",
          name: "session_uuid_name",
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.deleteColumn("Sessions", "uuid");
  },
};
