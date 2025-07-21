import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/order/list`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.success) {
          setOrders(res.data.orders);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrders();
  }, [backendUrl, token]);

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border p-4 mb-4">
            <h2>Order ID: {order._id}</h2>
            <p>Amount: ${order.amount}</p>
            <p>Status: {order.status || 'Pending'}</p>
            <div>
              {order.items.map((item, idx) => (
                <p key={idx}>
                  {item.name} - {item.size} x {item.quantity}
                </p>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
