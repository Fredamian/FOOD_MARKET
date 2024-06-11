const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Vendedor = sequelize.define('vendedores', {
  id: {
    type: Sequelize.INTEGER,
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
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
  },
  {
  freezeTableName: true,
  timestamps: false // Desativando a criação automática de createdAt e updatedAt
  });

module.exports = Vendedor;
