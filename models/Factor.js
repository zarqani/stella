const { DataTypes } = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define("factor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  trackingNumber: {
    type: DataTypes.INTEGER,
  },
  transactionID: {
    type: DataTypes.INTEGER,
  },
  subscriptionId: {
    type: DataTypes.INTEGER,
  },
  subscriptionExpired: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});
