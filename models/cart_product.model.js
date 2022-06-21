const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../databases/database');

const CartProduct = sequelize.define('cartProduct', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cart_id: {
    type: DataTypes.INTEGER,
    allowNul: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = CartProduct;
