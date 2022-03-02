const adminController = require('../controllers/admin.controller');
const imageUploadMiddleware = require('../middlewares/image-upload')

const express = require('express');

const router = express.Router();

router.get('/products', adminController.getProducts);

router.get('/products/new', adminController.getNewProduct);

router.post('/products', imageUploadMiddleware, adminController.createNewProduct)

module.exports = router;
