const Product = require('../models/product.model');

exports.getToken = async (req, res, next) => {
  res.status(200).send(req.decode);
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
  } catch (error) {
    next(error);
  }
};
