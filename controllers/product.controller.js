const Product = require('../models/product.model');

exports.getToken = async (req, res, next) => {
  res.status(200).send(req.decode);
};

exports.postAddProduct = async (req, res, next) => {
  try {
    const params = req.body;
    const product = await req.decode.user.createProduct({
      name: params.name,
      price: params.price,
      description: params.description,
    });
    return res.status(200).send(product);
  } catch (error) {
    next(error);
    console.log(error);
  }
};
