const express = require('express');

const compra = require('../controllers/compra');

const router = express.Router();

router.get('/', compra.getIndex);

router.get('/products', compra.getProducts);

router.get('/products/:productId', compra.getProduct);

router.get('/cart', compra.getCesta);

router.post('/cart', compra.postCesta);

router.post('/cart-delete-item', compra.postCestaDeleteProduct);

router.get('/orders', compra.getOrders);

router.get('/checkout', compra.getCheckout);

module.exports = router;
