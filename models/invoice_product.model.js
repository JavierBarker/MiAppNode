const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../databases/database');

const InvoiceProduct = sequelize.define('invoiceProduct', {
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
  invoice_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = InvoiceProduct;
