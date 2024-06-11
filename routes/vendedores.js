const express = require('express');
const router = express.Router();
const vendedorController = require('../controllers/admin');

router.post('/newSeller', vendedorController.postNewSeller);
router.get('/getSellers', vendedorController.getSellers);
router.delete('/removeSeller', vendedorController.removeSeller);

module.exports = router;
