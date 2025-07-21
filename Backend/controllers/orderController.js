import orderModel from "../models/orderModel.js";
import userModel from "../models/UserModel.js";

/////// placing order on cod
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: 'COD',
      payment: false,
      Date: Date.now()   // <-- match your schema: 'Date' not 'date'
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.status(200).json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

////  placing Order using Stripe Method 
const placeOrderStripe = async (req, res) => {

}

/// placing order using Razorpay method 
const placeOrderRazorPay = async (req, res) => {

}

//// all Orders data for admin panel 
const allOrders = async (req, res) => {

}

//// user order data for frontend 
const userOrders = async (req, res) => {

}

/////// update order status 
const updateStatus = async (req, res) => {

}

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorPay,
  allOrders,
  userOrders,
  updateStatus
};
