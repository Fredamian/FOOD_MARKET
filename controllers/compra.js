const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database'); 


// controllers/produtoController.js
const Produto = require('../models/produtos');

const Produto = sequelize.define('Produto', {
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
  descricao: {
    type: DataTypes.STRING,
    allowNull: true
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Produto;

// Registrar novo produto
exports.postNewProduct = async (req, res, next) => {
    const { nome, descricao, preco } = req.body;
    try {
      const newProduct = await Produto.create({ nome, descricao, preco });
      console.log('Produto registrado');
      res.status(200).json({ product: newProduct });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'Erro interno' });
    }
  };
  
  // Obter todos os produtos
  exports.getProducts = (req, res, next) => {
    console.log("Requisitando todos os produtos");
    Produto.findAll()
      .then(products => {
        res.status(200).json({ data: products });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: 'Erro interno' });
      });
  };
  
// Editar produto
exports.editProduct = async (req, res, next) => {
    const { produtoID, nome, descricao, preco } = req.body;
    try {
        const product = await Produto.findByPk(produtoID);

        if (!product) {
        return res.status(404).json({ msg: 'Produto não encontrado' });
        }

        product.nome = nome || product.nome;
        product.descricao = descricao || product.descricao;
        product.preco = preco || product.preco;

        await product.save();
        console.log('Produto atualizado');
        res.status(200).json({ product });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Erro interno' });
    }
    };

    // Remover produto
    exports.removeProduct = async (req, res, next) => {
    const { produtoID } = req.body;

    try {
        const product = await Produto.findByPk(produtoID);

        if (!product) {
        return res.status(404).json({ msg: 'Produto não encontrado' });
        }

        await product.destroy();
        console.log('Produto removido');
        res.status(200).json({ msg: 'Produto removido com sucesso' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Erro interno' });
    }
};





app.listen(3000, () => {
    console.log('La ne porta 3000');
  });



