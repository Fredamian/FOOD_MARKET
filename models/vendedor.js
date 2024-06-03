// models/cobrador.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database'); // ajuste conforme necessário

const Cobrador = sequelize.define('Cobrador', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Cobrador;