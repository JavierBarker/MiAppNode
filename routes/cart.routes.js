const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');
const { verifyToken } = require('../middlewares/auth');

router.post('/:id', verifyToken, cartController.postAddProductToCart);

module.exports = router;
