import Product from '../models/productModel.js'
import asyncHanlder from 'express-async-handler'

// @desc Fetch all products
// @route GET /api/proudcts
// @access Public
const getProducts = asyncHanlder(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

// @desc Fetch single product
// @route GET /api/proudcts/:id
// @access Public
const getProductById = asyncHanlder(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { getProducts, getProductById }
