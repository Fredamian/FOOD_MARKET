const express = require('express');
const authController = require("../controllers/authController"); // Correct path and file extension
const clientController = require("../controllers/admin.js"); // Assuming this is the correct file

const router = express.Router();

//router.post("/login", authController.login);
router.post('/newClient', clientController.postNewClient);
router.get('/getClients', clientController.getClients);
router.delete('/removeClient', clientController.removeClient);
router.get('/counts', clientController.getCounts);

module.exports = router;