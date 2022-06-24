const Invoice = require('../models/invoice.model');
const InvoiceProduct = require('../models/invoice_product.model');
const Cart = require('../models/cart.model');
const CartProduct = require('../models/cart_product.model');

exports.postCrateInvoice = async (req, res, next) => {
  const cart = await Cart.findOne({ where: { user_id: req.decode.user.id } });
  const cartProduct = await CartProduct.findAll({
    where: { cart_id: cart.id },
  });

  const invoice = await Invoice.create({ user_id: req.decode.user.id });
  const addProducts = await cartProduct.map((product) => {
    InvoiceProduct.create({
      quantity: product.quantity,
      invoice_id: invoice.id,
      product_id: product.product_id,
    });
  });

  await cartProduct.map((product) => {
    product.destroy();
  });
  res.status(200).send(addProducts);
};
