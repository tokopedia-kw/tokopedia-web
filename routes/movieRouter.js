const router = require("express").Router()
const movieController = require('../controllers/movieController')

router.get('/popular', movieController.getPopularMovie)

module.exports = router