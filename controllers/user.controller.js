const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json');
const User = require('../models/user.model');

exports.getUsers = async (req, res, next) => {
  const users = await User.findAll();

  res.status(500).send(users);
};

exports.postAddUser = async (req, res, next) => {
  const params = req.body;
  const password = await bcrypt.hash(params.password, 12);
  const [findUser, createUser] = await User.findOrCreate({
    where: {
      email: params.email,
    },
    defaults: {
      name: params.name,
      email: params.email,
      password: password,
    },
  });

  if (createUser) {
    res.status(200).send('Usuario creado.');
  } else {
    res.status(500).send('Este usuario ya existe.');
  }
};

exports.postLogin = async (req, res, next) => {
  try {
    const params = req.body;
    const user = await User.findOne({ where: { email: params.email } });
    if (user === null) {
      return res.status(400).send('Not Finded User');
    }
    const matchPassword = await bcrypt.compare(params.password, user.password);

    if (matchPassword) {
      const payload = {
        user: user,
      };
      const token = jwt.sign(payload, config.key, { expiresIn: 31536000 });

      return res.status(200).send({
        message: 'Correct Login',
        token: token,
      });
    } else {
      return res.status(400).send('Incorrect Password');
    }
  } catch (error) {
    next(error);
  }
};
