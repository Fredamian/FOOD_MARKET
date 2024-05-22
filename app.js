const express = require('express');
const bodyParser = require('body-parser');
const clientRoutes = require('./routes/clientes'); // Verifique o caminho correto conforme sua estrutura de diretórios

const app = express();

// Middleware para processar JSON no corpo das requisições
app.use(bodyParser.json());

// Middleware para processar dados codificados em URL (formulários)
// Defina explicitamente a opção extended como true
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para conectar ao banco de dados - substitua "connect" pela sua lógica de conexão
// var connect = "postgres://macbook_fredy:123@localhost/foodMarket";



// Middleware para registrar todas as solicitações recebidas
// Middleware de autenticação
app.use((req, res, next) => {
  // Simulação de autenticação - ajuste conforme necessário
  req.user = {
    createClient: (clientData) => {
      // Simulação de criação de cliente
      return Promise.resolve(clientData);
    },
    getClients: () => {
      // Simulação de obtenção de todos os clientes
      return Pessoa.findAll(); // Supondo que você está usando Sequelize e Pessoa é o seu modelo
    }
  };
  next();
});


// Rotas
app.use(clientRoutes); // Use as rotas do cliente

// Rota de teste
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

// Servidor
const PORT = process.env.PORT || 4400; // Use a porta definida pelo ambiente ou 4400
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
