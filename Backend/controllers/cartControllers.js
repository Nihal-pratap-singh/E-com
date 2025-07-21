import userModel from "../models/UserModel.js";

const addTocart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const UserData = await userModel.findById(userId);

    let cartData = await UserData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateToCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const UserData = await userModel.findById(userId);

    let cartData = await UserData.cartData;
    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "cart updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getToCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const UserData = await userModel.findById(userId);
    let cartData = await UserData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addTocart, updateToCart, getToCart };
