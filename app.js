// const express = require('express');
// const bodyParser = require('body-parser');
// const clientRoutes = require('./routes/clientes'); 

// const app = express();

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));

// // Middleware para conectar ao banco de dados - substitua "connect" pela sua lógica de conexão
// // var connect = "postgres://macbook_fredy:123@localhost/foodMarket";

// app.use((req, res, next) => {
//   req.user = {
//     createClient: (clientData) => {
 
//       return Promise.resolve(clientData);
//     },
//     getClients: () => {
//       return Pessoa.findAll();
//     }
//   };
//   next();
// });


// app.use(clientRoutes);
// // Rota de teste
// app.get('/', (req, res) => {
//     res.send('Server is up and running!');
// });


// // Servidorius
// const PORT = process.env.PORT || 4400;
// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const clientRoutes = require('./routes/clientes'); 
const sellerRoutes = require('./routes/vendedores'); 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//rotas 
// rotas de clientes
app.use('/clients', clientRoutes);

// rotas de vendedores
app.use('/vendedores', sellerRoutes);

// rotas de produtos
app.use('/products', productRoutes);



// Configurações de conexão com a BD
const client = new Client({
  user: 'macbook_fredy',
  host: 'localhost',
  database: 'foodMarket',
  password: '123',
  port: 5432, // Porta padrão do PostgreSQL
});
client.connect()
  .then(() => console.log('Conectado aBD'))
  .catch(err => console.error('Erro ao conectar a BD', err));

// add do cliente ao objeto de solicitação (req)
app.use((req, res, next) => {
  req.db = client; // Passando o cliente para as rotas
  req.user = {
    createClient: (clientData) => {
      // Implemente sua lógica de criação de cliente aqui usando o cliente do banco de dados
      return Promise.resolve(clientData);
    },
    getClients: () => {
      // Implemente sua lógica para obter clientes do banco de dados aqui
      return Pessoa.findAll(); // Note que isso precisa ser ajustado para utilizar o banco de dados
    }
  };
  next();
});


app.get('/', (req, res) => {
  res.send('Server OK!');
});

// Iniciando o servidor
const PORT = process.env.PORT || 4400;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
