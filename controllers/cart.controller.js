const Cart = require('../models/cart.model');
const CartProduct = require('../models/cart_product.model');
const Product = require('../models/product.model');

exports.postAddProductToCart = async (req, res, next) => {
  const cart = await Cart.findOne({ where: { user_id: req.decode.user.id } });
  let newQuantity = 1;

  const product = await Product.findByPk(req.params.id);
  if (product === null) res.status(500).send('No se encontro el producto');

  const cartProduct = await CartProduct.findOne({
    where: { cart_id: cart.id },
  });

  if (cartProduct != null) {
    const myProduct = await cartProduct.find(
      (products) => (products.product_id = product.id)
    );

    res.status(200);
  } else {
    const addProduct = await CartProduct.create({
      quantity: newQuantity,
      cart_id: cart.id,
      product_id: product.id,
    });

    res.status(200).send({ msg: 'Producto Agregado', cart: addProduct });
  }
  console.log(cart, req.decode.user.id);

  console.log(cartProduct);
};
