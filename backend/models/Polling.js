"use strict";
module.exports = (sequelize, DataTypes) => {
  const Polling = sequelize.define(
    "Polling",
    {
      userName: DataTypes.STRING,
      poll: DataTypes.STRING,
    },
    {}
  );
  Polling.associate = function (models) {
    Polling.belongsTo(models.Session, {
      foreignKey: "sessionId",
      onDelete: "CASCADE",
    });
  };
  return Polling;
};
