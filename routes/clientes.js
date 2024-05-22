const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();


//////////////////////////////////////
// delete client
//router.post('http://localhost:4400/clients', adminController.postNewClient);
//////////////////////////////////////

router.post('/postClients',adminController.postNewClient);


// requisitar todas os clientes
router.get('/getClients',adminController.getClients);

module.exports = router;