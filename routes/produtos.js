const express = require('express');
const router = express.Router();

const prodController = require('../controllers/productController');

router.get('/getProducts', prodController.getProducts);

router.get('/newProduct', prodController.getAddProduct);

module.exports = router;