const { DataTypes } = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define("film", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
  },
  subtitle: {
    type: DataTypes.STRING,
  },
  ages: {
    type: DataTypes.STRING,
  },
  video: {
    type: DataTypes.STRING,
  },
  thumbnail: {
    type: DataTypes.STRING,
  },
  trailer: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  rate: {
    type: DataTypes.INTEGER,
  },
  commentCount: {
    type: DataTypes.INTEGER,
  },
  type: {
    type: DataTypes.STRING,
  },
  manufacturingCountry: {
    type: DataTypes.STRING,
  },
  metas: {
    type: DataTypes.STRING,
  },
  time: {
    type: DataTypes.DATE,
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
