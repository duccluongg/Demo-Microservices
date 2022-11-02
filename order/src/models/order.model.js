const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: [true, 'Products is required!'],
  },
  submitDate: {
    type: Date,
    default: new Date(),
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

orderSchema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('Order', orderSchema);
