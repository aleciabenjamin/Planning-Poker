"use strict";
module.exports = (sequelize, DataTypes) => {
  const SessionType = sequelize.define(
    "SessionType",
    {
      title: DataTypes.STRING,
    },
    {}
  );
  SessionType.associate = function (models) {
    SessionType.hasMany(models.Session, {
      foreignKey: "sessionTypeId",
      onDelete: "CASCADE",
    });
  };
  return SessionType;
};
