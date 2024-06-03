const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();
//http://localhost:4400/


router.post('http://localhost:4400/newClient', adminController.postNewClient);
router.get('http://localhost:4400/getClient', adminController.getClients);
router.post('http://localhost:4400/removeClient', adminController.removeClient);


module.exports = router;
