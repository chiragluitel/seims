import express from 'express'
import { getProductInfo } from '../controllers/productController'

const productRouter = express.Router()

productRouter.get('/getProductInfo', getProductInfo)

export default productRouter;