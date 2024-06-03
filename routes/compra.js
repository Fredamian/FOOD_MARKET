//rotas para Alimentos

const express = require('express');

const controladorCompra = require('../controllers/compra');

const router = express.Router();

router.get('/', controladorCompra.getIndex);

router.get('/products', controladorCompra.getProducts);

router.get('/products/:productId', controladorCompra.getProduct);

router.get('/basket', controladorCompra.getCart);

router.post('/basket', controladorCompra.postCart);

router.post('/basket-delete-item', controladorCompra.postCartDeleteProduct);

router.get('/orders', controladorCompra.getOrders);

router.get('/checkout', controladorCompra.getCheckout);

module.exports = router;


/*
const router = express.Router();

router.post('/new', produtoController.postNewProduct);
router.get('/', produtoController.getProducts);
router.put('/edit', produtoController.editProduct);
router.delete('/remove', produtoController.removeProduct);

module.exports = router; 


const express = require('express');
const produtoController = require('../controllers/produtoController');
*/