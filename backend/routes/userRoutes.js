import express from 'express'
const router = express.Router()
import {authUser} from '../controller/userController.js'

//Fetch all products
//api/products
router.post('/login',authUser)
export default router