const express = require('express');
const router = express.Router();
const productController=require('../controller/productController');

router.get('/products',productController.getProducts);

router.put('/product',productController.addProduct);

module.exports = router;