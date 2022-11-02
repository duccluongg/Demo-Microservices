const router = require('express').Router();
const billingController = require('../controllers/billing.controllers.js');

//REGISTER
router.post('/', billingController.createBilling);

router.get('/', billingController.getAllBillings);

router.get('/:billingId', billingController.getBillingById);

module.exports = router;