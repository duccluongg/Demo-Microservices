const httpStatus = require('http-status');
const orderService = require('../services/order.service');

//REGISTER
exports.createOrder = async function (req, res) {
  try {
    const msg = await orderService.createOrder(req.body);
    if (msg) {
      return res.status(httpStatus.CREATED).json({
        message: msg,
      });
    }
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: error.message,
    });
  }
};

exports.getOrderById = async function (req, res) {
    try {
      const msg = await orderService.getOrderById(req.params);
      if (msg) {
        return res.status(httpStatus.OK).json({
          message: msg,
        });
      }
    } catch (error) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: error.message,
      });
    }
};
  
exports.getAllOrders = async function (req, res) {
    try {
      const msg = await orderService.getAllOrders();
      if (msg) {
        return res.status(httpStatus.OK).json({
          message: msg,
        });
      }
    } catch (error) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: error.message,
      });
    }
  };