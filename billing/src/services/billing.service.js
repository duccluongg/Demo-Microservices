const Billing = require('../models/billing.model');

exports.createBilling = async function (billingParam) {
  //Create new user
  const newBilling = new Billing(billingParam);
  //Hash passwords
  //Save user
  await newBilling.save();
  return 'Billing successfully created!';
};

// GET PROFILE
exports.getBillingById = async function (userReq) {
  const { billingId } = userReq;
  return await Billing.findById(billingId);
};

exports.getAllBillings = async function () {
    return await Billing.find();
  };
