const { DataTypes } = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define("rate", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userID: {
    type: DataTypes.INTEGER,
  },
  rate: {
    type: DataTypes.FLOAT,
  },
  enumeration: {
    type: DataTypes.STRING,
  },
  enumerationID: {
    type: DataTypes.INTEGER,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});
