const adminController = require('../controllers/admin.controller');

const express = require('express');

const router = express.Router();

router.get('/products', adminController.getProducts);

router.get('/products/new', adminController.getNewProduct);

module.exports = router;
