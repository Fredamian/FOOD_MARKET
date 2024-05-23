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



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurações de conexão com o banco de dados PostgreSQL
const client = new Client({
  user: 'macbook_fredy',
  host: 'localhost',
  database: 'foodMarket',
  password: '123',
  port: 5432, // Porta padrão do PostgreSQL
});

// Conexão com o banco de dados
client.connect()
  .then(() => console.log('Conectado ao banco de dados'))
  .catch(err => console.error('Erro ao conectar ao banco de dados', err));

// Adicionando o cliente ao objeto de solicitação (req)
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

app.use(clientRoutes);

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Iniciando o servidor
const PORT = process.env.PORT || 4400;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});





