import express from 'express'
import { getAllProducts, getProductInfo } from '../controllers/productController'

const productRouter = express.Router()

productRouter.get('/getProductInfo', getProductInfo)
productRouter.get('/getAllProducts', getAllProducts)

export default productRouter;