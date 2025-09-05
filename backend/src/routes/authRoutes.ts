import express from "express"
import { getUserDetails } from "../controllers/authController"

const authRouter = express.Router()

authRouter.get('/getUserDetails', getUserDetails)

export default authRouter;