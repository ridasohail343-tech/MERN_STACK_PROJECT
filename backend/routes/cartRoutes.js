import express from 'express'
import { addCart,updateCart,getCartData } from "../controllers/cartControllers.js"
import authUser from '../middleware/auth.js'


const CartRouter=express.Router()

CartRouter.post('/get',authUser,addCart)
CartRouter.post('/update',authUser,updateCart)
CartRouter.post('/add',authUser,getCartData)

export default CartRouter