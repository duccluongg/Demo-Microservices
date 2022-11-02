const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/env');

module.exports = function (req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');
  try {
    const { _id } = jwt.verify(token, SECRET_KEY);
    req.userId = _id;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token')
  }
}
