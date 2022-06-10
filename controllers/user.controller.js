const bcrypt = require('bcryptjs');
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
  const params = req.body;
  const user = await User.findOne({ where: { email: params.email } });
  const matchPassword = await bcrypt.compare(params.password, user.password);

  res.send(matchPassword);
};
