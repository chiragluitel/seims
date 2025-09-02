import express from 'express'
import { getAllProducts, getOneProduct } from '../controllers/productController'

const productRouter = express.Router()

productRouter.get('/getOneProduct', getOneProduct)
productRouter.get('/getAllProducts', getAllProducts)

export default productRouter;