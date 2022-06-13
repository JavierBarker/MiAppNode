const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { verifyToken } = require('../middlewares/auth');

router.get('/token', verifyToken, productController.getToken);

module.exports = router;
