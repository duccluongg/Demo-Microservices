const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    product_id: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    created_at: { type: String, default: new Date() },
    updated_at: { type: String, default: null },
})

cartSchema.virtual('id').get(function(){
    return this._id.toHexString()
  })
  cartSchema.virtual('user').get(function(){
    return this.user_id
  })
  cartSchema.virtual('product').get(function(){
    return this.product_id
  })
  
  cartSchema.set('toJSON', {
    virtuals: true
  })
  
  module.exports = mongoose.model('Cart', cartSchema)