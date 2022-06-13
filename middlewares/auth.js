const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

module.exports = {
  verifyToken: (req, res, next) => {
    const token = req.headers['access-token'];

    if (token) {
      jwt.verify(token, config.key, (err, decode) => {
        if (err) {
          return res.status(400).send({ message: 'Invalid Token' });
        } else {
          req.decode = decode;
          next();
        }
      });
    } else {
      res.status(401).send({
        message: 'Invalid Token',
      });
    }
  },
};
