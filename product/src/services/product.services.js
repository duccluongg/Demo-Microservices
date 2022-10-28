const Product = require('../models/product.model')

exports.addProduct = async function (productParam) {
    const newProduct = new Product(productParam)
    await newProduct.save();
    return productParam
}

exports.getProduct = async function () {
    return Product
}

exports.getProductDetail = async function (productReq) {
    const {_id} = productReq.params
    console.log(_id)
    return await Product.findById(_id)
}

exports.deleteProduct = async function (productId) {
    const { _id } = productId.params
    const product = await Product.findByIdAndDelete(_id)
     return product
}