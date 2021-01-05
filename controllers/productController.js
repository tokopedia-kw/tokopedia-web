const { Product } = require('../models')


const detailProduct = (req, res) => {
  let productId = +req.params.id
  Product.findByPk(productId)
    .then(data => {
      if (data) {
        res.status(200).json(data)
      } else {
        next({ name: "resourceNotFound" })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'internal server error' })
    })
}

const createProduct = (req, res, next) => {
  const productParams = {
    name: req.body.name,
    price: +req.body.price
  }
  Product.create(productParams)
    .then(product => {
      res.status(201).json(product)
    })
    .catch(err => {
      next(err)
    })
}

const deleteProduct = (req, res) => {
  Product.destroy({ where: { id: req.params.id } })
    .then(result => {
      if (result == 1) {
        res.status(200).json({ message: 'Product has been deleted' })
      } else {
        next({ name: "resourceNotFound" })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'internal server error' })
    })
}

module.exports = {
  detailProduct,
  createProduct,
  deleteProduct
}