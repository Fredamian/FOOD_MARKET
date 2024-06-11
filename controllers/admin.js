//const { ClientSession } = require('mongodb');

const Cliente = require('../models/cliente');
const Vendedor = require('../models/vendedor')

// Registrar novo cliente
exports.postNewClient = async (req, res) => {
  const { id, nome, email, password } = req.body;
  try {
    //porque os o que mais pode diferir os clientes sao seus emails
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


//implementei para que o mesmo controller que controla os clientes tambem controlasse os vendedores

// Registrar novo vendedor
exports.postNewSeller = async (req, res) => {
  const { id, nome, email, password} = req.body;
  try {
    //porque os o que mais pode diferir os vendedores sao seus emails
    //const existingVendedor = await Vendedor.findOne({ where: { nome } });

    //if (existingVendedor) {
    //  return res.status(400).json({ msg: 'Este vendedor já existe' });
    //}
    const newSeller = await Vendedor.create({ id, nome, email, password });
    res.status(200).json({ seller: newSeller });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Erro nas profundezas' });
  }
};

// busca e retorna todos os vendedores
exports.getSellers = async (req, res) => {
  try {
    const vendedores = await Vendedor.findAll();
    res.status(200).json({ vendedores: vendedores });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Erro nas profundezas' });
  }

};

// remover vendedor
exports.removeSeller = async (req, res) => {
  const { id } = req.body;

  try {
    const seller = await Vendedor.findByPk(id);
    if (!seller) {
      return res.status(404).json({ msg: 'Vendedor não encontrado' });
    }
    await seller.destroy();
    res.status(200).json({ msg: 'Vendedor removido com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Erro nas profundezas delete' });
  }
};
























// funcao apenas para retornar a quantidade de clientes e vendedores que se encontram na base de dados
exports.getCounts = async (req, res) => {
  try {
    const Clientes = await Cliente.count();
    const Vendedores = await Vendedor.count();
    res.status(200).json({ Clientes, Vendedores });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Erro nas profundezas' });
  }
};
