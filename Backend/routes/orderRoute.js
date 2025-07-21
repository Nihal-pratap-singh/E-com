import express from 'express'
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorPay,
  allOrders,
  userOrders,
  updateStatus
} from '../controllers/orderController.js'
import authUser from '../middleware/adminAuth.js'
import adminAuth from '../middleware/adminAuth.js'

const orderRouter = express.Router()

// Admin features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorPay)

// User features
orderRouter.post('/user-orders', authUser, userOrders)

export default orderRouter
