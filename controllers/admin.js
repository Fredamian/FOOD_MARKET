const { ClientSession } = require('mongodb');
const Cliente = require('../models/cliente');

// Registrar novo cliente
exports.postNewClient = async (req, res) => {
  const { id, nome, email, password } = req.body;

  try {
    const existingClient = await Cliente.findOne({ where: { email } });

    if (existingClient) {
      return res.status(400).json({ msg: 'Este cliente já existe' });
    }
    const newClient = await Cliente.create({ id, nome, email, password });
    res.status(200).json({ client: newClient });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Erro nas profundezas' });
  }
};

// Retornar todos os clientes
exports.getClients = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json({ clientes: clientes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Erro nas profundezas' });
  }
};

// Remover cliente
exports.removeClient = async (req, res) => {
  const { id } = req.body;

  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ msg: 'Cliente não encontrado' });
    }

    await cliente.destroy();
    res.status(200).json({ msg: 'Cliente removido com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Erro nas profundezas delete' });
  }
};










// Dear programmer:
// When I wrote this code, only god and I
// knew how it worked.
// Now, only god knows it!
//
// Therefore, if you are trying to optimize
// this routine and it fails (most surely),
// please increase this counter as a
// warning for the next person:
//
// total hours wasted here = 25hr
//