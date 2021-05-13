'use strict';
module.exports = (sequelize, DataTypes) => {
  const CreditCard = sequelize.define(
    'CreditCard',
    {
      numbercc: {
        type: DataTypes.STRING(16),
        allowNull: false,
        validate: {
          isCreditCard: true,
        },
      },
      expire: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isAfter: new Date(),
        },
      },
      balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: 'creditcard',
    }
  );
  return CreditCard;
};