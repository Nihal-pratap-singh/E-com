import  express from 'express'
import { addTocart, getToCart, updateToCart } from '../controllers/cartControllers.js'
import authUser from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/get',authUser , getToCart)
cartRouter.post('/add',authUser, addTocart)
cartRouter.post('/update',authUser, updateToCart)

export default cartRouter
