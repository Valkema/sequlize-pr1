'use strict';
//const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      login: DataTypes.STRING,
      //passwordHash: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'passwordHash',
        set(value) {
          this.setDataValue('password', bcrypt.hashSync(value, 10));
        },
      },
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Task, {
      foreignKey: {
        field: 'userId',
      },
      as: 'tasks',
    });
  };
  return User;
};