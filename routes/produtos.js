const express = require('express');

const router = express.Router();

const prodController = require('../controllers/productController');

router.get('/getProducts', prodController.getProducts);

router.post('/newProduct', prodController.postAddProduct);

module.exports = router;