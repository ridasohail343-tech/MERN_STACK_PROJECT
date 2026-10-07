import express from 'express'

import { placeorders, PlaceOrdersStripe, PlaceOrderRazor, AllOrders, UserOrders, UserStatus } from '../controllers/orderControllers.js'

import adminAuth from '../middleware/adminAuth.js'

import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features

orderRouter.post('/list',adminAuth,AllOrders)

orderRouter.post('/status',adminAuth,UserStatus)

// Payment Features

orderRouter.post('/place',authUser,placeorders)

orderRouter.post('/stripe',authUser,PlaceOrdersStripe)

orderRouter.post('/razorpay',authUser,PlaceOrderRazor)

// User Feature

orderRouter.post('/userorders',authUser,UserOrders)

export default orderRouter