const express = require('express');
const router = express.Router();
const clientController = require('../controllers/admin');

router.post('/newClient', clientController.postNewClient);
router.get('/getClient', clientController.getClients);
router.delete('/removeClient', clientController.removeClient);

// Rota para contar clientes e vendedores
router.get('/counts', clientController.getCounts);

module.exports = router;






















