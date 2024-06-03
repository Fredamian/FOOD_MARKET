// controllers/clienteController.js
const { Pessoa } = require('../models/cliente');

// Registrar novo cliente
exports.postNewClient = async (req, res, next) => {
  const { id, nome, email, password } = req.body;

  try {
    const newClient = await Pessoa.create({ id, nome, email, password });
    console.log('Cliente registrado');
    res.status(200).json({ client: newClient });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Erro interno' });
  }
};

// Obter todos os clientes
exports.getClients = (req, res, next) => {
  Pessoa.findAll()
    .then(clients => {
      res.status(200).json({ data: clients });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: 'Erro interno' });
    });
};

// Remover cliente
exports.removeClient = async (req, res, next) => {
  const { clienteID } = req.body;

  try {
    const cliente = await Pessoa.findByPk(clienteID);

    if (!cliente) {
      return res.status(404).json({ msg: 'Cliente não encontrado' });
    }

    await cliente.destroy();
    console.log('Cliente removido');
    res.status(200).json({ msg: 'Cliente removido com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Erro interno' });
  }
};

// controllers/cobradorController.js
const Cobrador = require('../models/cobrador');

// Registrar novo cobrador
exports.postNewCollector = async (req, res, next) => {
  const { id, nome, email, password } = req.body;

  try {
    const newCollector = await Cobrador.create({ id, nome, email, password });
    console.log('Cobrador registrado');
    res.status(200).json({ collector: newCollector });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Erro interno' });
  }
};

// Obter todos os cobradores
exports.getCollectors = (req, res, next) => {
  Cobrador.findAll()
    .then(collectors => {
      res.status(200).json({ data: collectors });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: 'Erro interno' });
    });
};

// Remover cobrador
exports.removeCollector = async (req, res, next) => {
  const { cobradorID } = req.body;

  try {
    const cobrador = await Cobrador.findByPk(cobradorID);

    if (!cobrador) {
      return res.status(404).json({ msg: 'Cobrador não encontrado' });
    }

    await cobrador.destroy();
    console.log('Cobrador removido');
    res.status(200).json({ msg: 'Cobrador removido com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Erro interno' });
  }
};
