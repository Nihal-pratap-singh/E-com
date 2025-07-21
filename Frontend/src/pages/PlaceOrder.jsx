import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    products,
    getCartAmount,
    delivery_fee,
    backendUrl,
    token,
    setCartItems,
  } = useContext(ShopContext);

  const [method, setMethod] = useState('cod');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    ZipCode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!token) {
      toast.error("Please login to place an order.");
      navigate("/login");
      return;
    }

    try {
      let orderItems = [];

      for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
          if (cartItems[itemId][size] > 0) {
            const itemInfo = products.find((product) => product._id === itemId);
            if (itemInfo) {
              const itemClone = { ...itemInfo };
              itemClone.size = size;
              itemClone.quantity = cartItems[itemId][size];
              orderItems.push(itemClone);
            }
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
        paymentMethod: method,
      };

      if (method === 'cod') {
        const response = await axios.post(
          `${backendUrl}/api/order/place`,
          orderData,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.data.success) {
          toast.success("Order placed successfully!");
          setCartItems({});
          navigate('/orders'); 
        } else {
          // toast.error(response.data.message || "Something went wrong.");
        }
      } else {
        // toast.error('Please select a valid payment method.');
      }

    } catch (error) {
      console.error(error);
      toast.error('Order failed!');
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* LEFT: Delivery info */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        <div className="flex gap-3">
          <input required name="firstName" value={formData.firstName} onChange={onChangeHandler} placeholder="First name" className="border rounded p-2 w-full" />
          <input required name="lastName" value={formData.lastName} onChange={onChangeHandler} placeholder="Last name" className="border rounded p-2 w-full" />
        </div>
        <input required name="email" value={formData.email} onChange={onChangeHandler} placeholder="Email" className="border rounded p-2 w-full" />
        <input required name="street" value={formData.street} onChange={onChangeHandler} placeholder="Street" className="border rounded p-2 w-full" />
        <div className="flex gap-3">
          <input required name="city" value={formData.city} onChange={onChangeHandler} placeholder="City" className="border rounded p-2 w-full" />
          <input required name="state" value={formData.state} onChange={onChangeHandler} placeholder="State" className="border rounded p-2 w-full" />
        </div>
        <div className="flex gap-3">
          <input required name="ZipCode" value={formData.ZipCode} onChange={onChangeHandler} placeholder="ZipCode" className="border rounded p-2 w-full" />
          <input required name="country" value={formData.country} onChange={onChangeHandler} placeholder="Country" className="border rounded p-2 w-full" />
        </div>
        <input required name="phone" value={formData.phone} onChange={onChangeHandler} placeholder="Phone Number" type="tel" className="border rounded p-2 w-full" />
      </div>

      {/* RIGHT: CartTotal + Payment */}
      <div className="w-full sm:w-[400px] mt-8 sm:mt-0">
        <CartTotal />
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className="flex flex-col gap-3 mt-4">
            <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded">
              <p className={`w-4 h-4 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`} />
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
            </div>
            <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded">
              <p className={`w-4 h-4 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`} />
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay" />
            </div>
            <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded">
              <p className={`w-4 h-4 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`} />
              <span className="mx-4">Cash on Delivery</span>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button type="submit" className="bg-black text-white px-16 py-3 text-sm">Place Order</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
