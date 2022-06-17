const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../databases/database');

const Cart = sequelize.define('cart', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Cart;
