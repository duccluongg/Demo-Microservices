const productService = require('../services/product.services');
const httpStatus = require('http-status');
exports.addProduct = async function (req, res, next) {
  const { name, image, price, brand, description, subDescription } = req.body;
  try {
    const Res = await productService.addProduct({
      name,
      image,
      price,
      brand,
      description,
      subDescription,
    });
    if (Res) {
      return res.status(httpStatus.OK).json({
        status: 'Successful',
        data: Res,
      });
    }
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: error.message,
    });
  }
};

exports.getProduct = async function (req, res) {
  const Res = await productService.getProduct();
  return res.status(200).json(Res);
};

exports.getProductDetail = async function (req, res) {
  try {
    const productDetail = await productService.getProductDetail(req);
    if (productDetail) {
      return res.status(httpStatus.OK).json({
        detail: productDetail,
      });
    } else
      return res.status(httpStatus.NOT_FOUND).json({
        message: 'Product not found!',
      });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: error.message,
    });
  }
};

exports.deleteProduct = async function (req, res) {
  try {
    const product = await productService.deleteProduct(req);
    if (product) {
      return res.status(httpStatus.OK).json({
        msg: 'Delete Successful',
      });
    } else
      return res.status(httpStatus.NOT_FOUND).json({
        message: 'Product not found!',
      });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: error.message,
    });
  }
};
