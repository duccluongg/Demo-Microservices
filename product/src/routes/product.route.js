const router = require('express').Router();
const productController = require("../controllers/product.controller")
const auth = require("../middleware/auth")

//Add Product
router.post('/addProduct', productController.addProduct)

//Get All Product
router.get('/', productController.getProduct)

//Get Product Detail
router.get('/:_id', productController.getProductDetail)

//Delete Product
router.delete('/:_id',productController.deleteProduct)


module.exports = router;