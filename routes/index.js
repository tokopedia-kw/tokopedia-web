const router = require("express").Router()
const shippingRouter = require('./shippingRouter')
const productRouter = require('./productRouter')
const movieRouter = require('./movieRouter')

router.get('/', (req, res) => {
  res.send("Welcome")
})

router.use("/shippings", shippingRouter)
router.use("/products", productRouter)
router.use("/movies", movieRouter)

module.exports = router