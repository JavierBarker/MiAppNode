const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoice.controller');
const { verifyToken } = require('../middlewares/auth');

module.exports = router;
