const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/env');
const rabbit = require('./../rabitmq');

module.exports = function (req, res, next) {
  rabbit.getInstance()
  .then(broker => {
    broker.subscribe('test', (msg, ack) => {
      console.log('Message:', msg.content.toString())
      ack()
    })
  })
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
