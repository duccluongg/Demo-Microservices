const router = require('express').Router();
const orderController = require('../controllers/order.controller');

//REGISTER
router.post('/', orderController.createOrder);

router.get('/', orderController.getAllOrders);

router.get('/:orderId', orderController.getOrderById);

module.exports = router;