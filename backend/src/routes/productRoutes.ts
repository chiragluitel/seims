import express from 'express'
import { createProduct, getAllProductCategories, getAllProducts, getOneProduct, uploadImage } from '../controllers/productController'

const productRouter = express.Router()

productRouter.post('/createProduct', createProduct)
productRouter.post('/uploadImage', uploadImage)
productRouter.get('/getOneProduct', getOneProduct)
productRouter.get('/getAllProducts', getAllProducts)
productRouter.get('/getAllProductCategories', getAllProductCategories )

export default productRouter;