const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');
const { verifyToken } = require('../middlewares/auth');

router.post('/:id', verifyToken, cartController.postAddProductToCart);
router.put(
  '/changeQuantity/:id',
  verifyToken,
  cartController.putChangeQuantity
);
router.delete(
  '/deleteToCart/:id',
  verifyToken,
  cartController.deleteDeleteToCart
);
module.exports = router;
