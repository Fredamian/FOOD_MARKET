const express = require('express');

const clientController = require("../controllers/admin"); // Assuming this is the correct file

const { login, registro } = require('../controllers/authController');

const router = express.Router();

router.post('/login', login);
router.post('/register', registro);

router.post('/newClient', clientController.postNewClient);
router.get('/getClients', clientController.getClients);
router.delete('/removeClient', clientController.removeClient);
router.get('/counts', clientController.getCounts);

module.exports = router;
