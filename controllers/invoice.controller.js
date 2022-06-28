const Invoice = require('../models/invoice.model');
const InvoiceProduct = require('../models/invoice_product.model');
const Cart = require('../models/cart.model');
const CartProduct = require('../models/cart_product.model');
const nodemailer = require('nodemailer');
const sendGrid = require('nodemailer-sendgrid-transport');

const transport = nodemailer.createTransport(
  sendGrid({
    auth: {
      api_key:
        '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',
    },
  })
);

exports.postCrateInvoice = async (req, res, next) => {
  try {
    // const cart = await Cart.findOne({ where: { user_id: req.decode.user.id } });
    // const cartProduct = await CartProduct.findAll({
    //   where: { cart_id: cart.id },
    // });

    // const invoice = await Invoice.create({ user_id: req.decode.user.id });
    // const addProducts = await cartProduct.map((product) => {
    //   InvoiceProduct.create({
    //     quantity: product.quantity,
    //     invoice_id: invoice.id,
    //     product_id: product.product_id,
    //   });
    // });

    // await cartProduct.map((product) => {
    //   product.destroy();
    // });
    const sendEmail = await transport.sendMail({
      to: '',
      from: '',
      subject: 'hola',
      html:
        '<!DOCTYPE html>' +
        '<html lang="en">' +
        '<head>' +
        ' <meta charset="UTF-8">' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">' +
        '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
        '<title>Herrarte</title>' +
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"' +
        'integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">' +
        '<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">' +
        '<style>' +
        '.landing {' +
        'height: 100%;' +
        'width: 100%;' +
        'background: rgb(52, 156, 255);' +
        'background: linear-gradient(170deg, #FF4500 0%, #016DB6 85%);' +
        '}' +
        'img {' +
        'max-width: 100%;' +
        '}' +
        'p.lead {' +
        'font-size: 1.9rem;' +
        'text-shadow: 0 0 3px rgba(0, 0, 0, .3);' +
        '}' +
        'p.h5 {' +
        'font-weight: 300;' +
        'text-shadow: 0 0 3px rgba(0, 0, 0, .3);' +
        '}' +
        'img,' +
        '.btn {' +
        'transition: transform .6s ease;' +
        'box-shadow: 0 0 5px rgba(0, 0, 0, .3);' +
        '}' +
        '.btn:hover {' +
        'transform: scale(1.06);' +
        'cursor: pointer;' +
        '}' +
        'img:hover {' +
        'transform: scale(.99);' +
        'cursor: pointer;' +
        '}' +
        ' a,' +
        'a:hover {' +
        'cursor: pointer;' +
        'color: white;' +
        '}' +
        '</style>' +
        ' </head>' +
        '<body>' +
        '<!-- Start Landing Page-->' +
        '<div class="landing pt-2">' +
        '<div class="container-fluid pt-1 pb-5">' +
        '<div class="row justify-content-center p-5">' +
        '<div class="col-12 text-center">' +
        '<p class="lead text-light font-weight-bold">Hola Jose herrarte</p>' +
        '<p class="h4 text-light pb-3"></p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<!-- End Landing Page -->' +
        '</body>' +
        '</html>',
    });
    res.status(200).send({ msg: 'email enviado', email: sendEmail });
  } catch (error) {
    next(error);
  }
};
