//rotas para clientes
const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/login-client', adminController.getAddProduct);

// /admin/products => GET
router.get('/register-client', adminController.getProducts);

//////////////////////////////////////
// delete client
router.get('/delete-client', adminController.getProducts);
//////////////////////////////////////


// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;