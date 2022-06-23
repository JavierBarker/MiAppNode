const Cart = require('../models/cart.model');
const CartProduct = require('../models/cart_product.model');
const Product = require('../models/product.model');

exports.postAddProductToCart = async (req, res, next) => {
  const cart = await Cart.findOne({ where: { user_id: req.decode.user.id } });

  const product = await Product.findByPk(req.params.id);
  if (product === null) res.status(500).send('No se encontro el producto');

  const cartProduct = await CartProduct.findOne({
    where: { cart_id: cart.id, product_id: product.id },
  });

  if (cartProduct != null) {
    const newQuantity = cartProduct.quantity + 1;
    const addProduct = await cartProduct.update({ quantity: newQuantity });
    //const addProduct = cartProduct.save();
    res.status(200).send(addProduct);
  } else {
    const addProduct = await CartProduct.create({
      quantity: 1,
      cart_id: cart.id,
      product_id: product.id,
    });

    res.status(200).send({ msg: 'Producto Agregado', cart: addProduct });
  }
};

exports.putChangeQuantity = async (req, res, next) => {
  const cart = await Cart.findOne({ where: { user_id: req.decode.user.id } });

  const product = await Product.findByPk(req.params.id);
  if (product === null) res.status(500).send('No se encontro el producto');

  const cartProduct = await CartProduct.findOne({
    where: { cart_id: cart.id, product_id: product.id },
  });

  if (req.query.quantity == 0) {
    const deleteProduct = await cartProduct.destroy();
    res.status(200).send(deleteProduct);
  }
  if (cartProduct != null) {
    const changeQuantity = await cartProduct.update({
      quantity: req.query.quantity,
    });
    //const changeQuantity = cartProduct.save();
    res.status(200).send(changeQuantity);
  }
};

exports.deleteDeleteToCart = async (req, res, next) => {
  const cart = await Cart.findOne({ where: { user_id: req.decode.user.id } });

  const product = await Product.findByPk(req.params.id);
  if (product === null) res.status(500).send('No se encontro el producto');

  const cartProduct = await CartProduct.findOne({
    where: { cart_id: cart.id, product_id: product.id },
  });

  const deleteProduct = await cartProduct.destroy();

  res.status(200).send(deleteProduct);
};
