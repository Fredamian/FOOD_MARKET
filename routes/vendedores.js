const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();
//http://localhost:4400/


router.post('http://localhost:4400/postNewSeller', adminController.postNewSeller);
router.get('http://localhost:4400/lookSeller', adminController.getSeller);
router.delete('http://localhost:4400/removeSeller', adminController.removeCollector);

module.exports = router;