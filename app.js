const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./databases/database');

const User = require('./models/user.model');
const Product = require('./models/product.model');
const Cart = require('./models/cart.model');
const CartProduct = require('./models/cart_product.model');
const Invoice = require('./models/invoice.model');
const InvoiceProduct = require('./models/invoice_product.model');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const cartRoutes = require('./routes/cart.routes');
const invoiceRoutes = require('./routes/invoice.routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/invoice', invoiceRoutes);

sequelize
  //{force: true}
  // .sync({ force: true })
  .sync()
  .then((connect) => {
    //console.log(connect);
    app.listen(process.env.PORT || 3000, () => {
      console.log('server in port: 3000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
