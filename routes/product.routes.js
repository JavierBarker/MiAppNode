const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { verifyToken } = require('../middlewares/auth');

router.get('/token', verifyToken, productController.getToken);
router.post('/add', verifyToken, productController.postAddProduct);

module.exports = router;
