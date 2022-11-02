const httpStatus = require('http-status');
const billingService = require('../services/billing.service');

//REGISTER
exports.createBilling = async function (req, res) {
  try {
    const msg = await billingService.createBilling(req.body);
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

exports.getBillingById = async function (req, res) {
    try {
      const msg = await billingService.getBillingById(req.params);
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
  
exports.getAllBillings = async function (req, res) {
    try {
      const msg = await billingService.getAllBillings();
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