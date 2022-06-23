const Invoice = require('../models/invoice.model');
const InvoiceProduct = require('../models/invoice_product.model');
const Cart = require('../models/cart.model');
const CartProduct = require('../models/cart_product.model');

exports.postCrateInvoice = async (req, res, next) => {
  const cart = await Cart.findOne({ where: { user_id: req.decode.user.id } });
  const cartProduct = await CartProduct.findAll({
    where: { cart_id: cart.id },
  });

  console.log(cartProduct);
};
