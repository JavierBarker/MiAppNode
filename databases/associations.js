const User = require('../models/user.model');
const Product = require('../models/product.model');

module.exports = {
  associations: (req, res, next) => {
    User.hasMany(Product);
    Product.belongsTo(User);
    next();
  },
};
