const router = require("express").Router()

const shippingController = require('../controllers/shippingController')

router.get('/cities', shippingController.getCities)
router.get('/provinces', shippingController.getProvinces)
router.post('/cost', shippingController.getCost)

module.exports = router