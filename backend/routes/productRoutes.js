import express from 'express'
const router = express.Router()
import {getProducts, getProductsById} from '../controller/productController.js'

//Fetch all products
//api/products
router.route('/').get(getProducts)

//Fetch particular product
//api/products/:id
router.route('/:id').get(getProductsById)

export default router