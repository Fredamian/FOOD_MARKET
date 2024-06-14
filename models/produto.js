const Sequelize = require('sequelize');
const meusequelize = require('../util/database');

//const Pessoa = require('./pessoa');
//const CartItem = require('./cart-item');

const Produto = meusequelize.define('produto', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true
  }, 
  title: Sequelize.STRING, 
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }, 
  imageurl : {
    type: Sequelize.TEXT,
    allowNull: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false // Desativando a criação automática de createdAt e updatedAt
});


module.exports = Produto;