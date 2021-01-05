const router = require("express").Router()
const productController = require('../controllers/productController')

router.get('/:id', productController.detailProduct)
router.post('/', productController.createProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router