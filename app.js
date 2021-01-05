require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const router = require('./routes')
const errorHandlers = require('./middlewares/errorHandlers')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)
app.use(errorHandlers)


app.listen(PORT, () => {
  console.log('---------> server started at port', PORT);
})