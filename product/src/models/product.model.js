const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
  },
  description: {
    type: String,
    require: true,
  },
  subDescription: {
    type: String,
  },
});

productSchema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('Product', productSchema);