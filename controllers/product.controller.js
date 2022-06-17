const Product = require('../models/product.model');

exports.getToken = async (req, res, next) => {
  res.status(200).send(req.decode);
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).send(products);
  } catch (error) {
    next(error);
  }
};

exports.postAddProduct = async (req, res, next) => {
  try {
    const params = req.body;
    const product = await Product.create({
      name: params.name,
      price: params.price,
      description: params.description,
      user_id: req.decode.user.id,
    });

    return res.status(200).send(product);
  } catch (error) {
    next(error);
  }
};

exports.putUpdateProduct = async (req, res, next) => {
  try {
    const params = req.body;
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (product === null) {
      res.status(400).send('no se encontro el producto');
    }

    await product.update({
      name: params.name || product.name,
      price: params.price || product.price,
      description: params.description || product.description,
    });
    const save = await product.save();

    if (save) {
      res.status(200).send(save);
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      const productDeleted = product.destroy();
      res.status(200).send(productDeleted);
    }
  } catch (error) {
    next(error);
  }
};
