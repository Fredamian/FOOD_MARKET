const express = require('express');
const bodyParser = require('body-parser');
const clientRoutes = require('../routes/clientes'); 

const Pessoa = require('../models/cliente');

const app = express();

//register new client
exports.postNewClient =  async (req, res, next) => {
  const { id, nome, email, password } = req.body;

  console.log("entry post function")

  // Simulação de criação de cliente no banco de dados
  req.user.createClient({
    id,
    nome,
    email,
    password
  })
  .then((newClient) => {
    console.log('Cliente registrado');
    res.status(200).json({ client: newClient });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: 'Erro interno' });
  });
};

/////// get clients
exports.getClients = (req, res, next) => {
  console.log("Requisitando todos os clientes");
  Pessoa.findAll()
    .then(clients => {
      res.status(200).json({data : clients });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: 'Erro interno' });
    });
};