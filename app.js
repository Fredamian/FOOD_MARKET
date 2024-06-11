const express = require('express');
const bodyParser = require('body-parser');
const clientRoutes = require('./routes/clientes');
const sellerRoutes = require('./routes/vendedores');
const dbClient = require('./util/database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware para adicionar a conexão do banco de dados ao objeto de solicitação (req)
app.use((req, res, next) => {
  req.db = dbClient;
  next();
});

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


// Dear programmer:
// When I wrote this code, only god and
// I knew how it worked.
// Now, only god knows it!
//
// Therefore, if you are trying to optimize
// this routine and it fails (most surely),
// please increase this counter as a
// warning for the next person:
//
// total hours wasted here = 25h
//