const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    trim: true,
  },
  totalAmount: {
    type: Number,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
});

billingSchema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('Billing', billingSchema);
