const express = require('express');
const bodyParser = require('body-parser');
const clientRoutes = require('./routes/clientes');
const sellerRoutes = require('./routes/vendedores');
const dbClient = require('./util/database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para adicionar a conexão do banco de dados ao objeto de solicitação (req)
app.use((req, res, next) => {
  req.db = dbClient;
  next();
});

// Rotas
app.use(clientRoutes);
app.use(sellerRoutes);

app.get('/', (req, res) => {
  res.send('Server OK!');
});




// iniciando o servidor
const PORT = process.env.PORT || 4900;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
