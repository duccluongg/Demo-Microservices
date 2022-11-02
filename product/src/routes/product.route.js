const router = require('express').Router();
const productController = require('../controllers/product.controller');
const Producer = require('./../rabitmq/producer.js');
const producer = new Producer();
//Add Product
router.post(
  '/addProduct',
  async (req, res, next) => {
    await producer.publishMessage(req.body.logType, req.header('auth-token'));
    res.send();
  },
  productController.addProduct
);

//Get All Product
router.get('/', productController.getProduct);

//Get Product Detail
router.get('/:_id', productController.getProductDetail);

//Delete Product
router.delete('/:_id', productController.deleteProduct);

router.post('/send', async (req, res, next) => {
  await producer.publishMessage(req.body.logType, req.body.message);
  res.send();
});

module.exports = router;
