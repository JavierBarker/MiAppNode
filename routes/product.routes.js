const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { verifyToken } = require('../middlewares/auth');

router.get('/token', verifyToken, productController.getToken);
router.post('/add', verifyToken, productController.postAddProduct);
router.get('/', verifyToken, productController.getProducts);
router.put('/update/:id', verifyToken, productController.putUpdateProduct);
router.delete('/delete/:id', verifyToken, productController.deleteProduct);

module.exports = router;
