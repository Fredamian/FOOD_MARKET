const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Vendedor = sequelize.define('Vendedor', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
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
}, {
  tableName: 'vendedores',
  timestamps: false
});

module.exports = Vendedor;
