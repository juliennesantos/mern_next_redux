'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('user', {
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullName: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};