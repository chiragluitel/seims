import express from 'express'
import { getAllLocations } from '../controllers/shopfloorController';

const shopfloorRouter = express.Router()

shopfloorRouter.get('/getAllLocations', getAllLocations)

export default shopfloorRouter;