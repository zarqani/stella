const { DataTypes } = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define("filmpeople_film", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  filmID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  filmPeopleID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
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
