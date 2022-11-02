const Order = require('../models/order.model');
const Producer = require('../rabitmq/producer');
const producer = new Producer();

exports.createOrder = async function (orderParam) {
  //Create new user
  const newOrder = new Order(orderParam);
  await producer.publishMessage("createOrder", newOrder);

  //Hash passwords
  //Save user
  await newOrder.save();
  return 'Order successfully created!';
};

// GET PROFILE
exports.getOrderById = async function (userReq) {
  const { orderId } = userReq;
  return await Order.findById(orderId);
};

exports.getAllOrders = async function () {
  return await Order.find();
};
