const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers);
router.post('/add', userController.postAddUser);
router.post('/login', userController.postLogin);

module.exports = router;
