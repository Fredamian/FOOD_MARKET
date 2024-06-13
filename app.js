
const express = require('express');
const bodyParser = require('body-parser');
const clientRoutes =require('./routes/clientes');
const sellerRoutes = require('./routes/vendedores');
const prodRoutes =require('./routes/produtos');
const dbClient = require( './util/database.js');
const cors = require('cors');


const app = express();

// Middleware to add database connection to the request object (req)
app.use((req, res, next) => {
  req.db = dbClient;
  next();
});

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Routes
app.use(prodRoutes);
app.use(clientRoutes);
app.use(sellerRoutes);

app.get('/', (req, res) => {
  res.send('Server OK!');
});

// Starting the server
const PORT = process.env.PORT || 4900;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;