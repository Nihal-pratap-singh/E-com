
import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

import {
  FiPackage,
  FiShoppingBag,
  FiArrowRight,
  FiCalendar,
  FiCreditCard,
  FiRefreshCw,
  FiTruck,
  FiCheckCircle,
  FiClock,
} from 'react-icons/fi';

const Orders = () => {

  const { backendUrl, token } = useContext(ShopContext);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // FETCH ORDERS - EXISTING API PRESERVED
  useEffect(() => {

    const fetchOrders = async () => {

      try {

        setLoading(true);
        setError('');

        const res = await axios.get(
          `${backendUrl}/api/order/list`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.success) {
          setOrders(res.data.orders || []);
        }

      } catch (err) {

        console.error('Error fetching orders:', err);
        setError(
          err.response?.data?.message ||
          'Unable to load your orders. Please try again.'
        );

      } finally {
        setLoading(false);
      }

    };

    fetchOrders();

  }, [backendUrl, token]);

  // ORDER STATUS COLORS
  const getStatusStyle = (status) => {

    const value = (status || 'Pending').toLowerCase();

    if (value.includes('deliver')) {
      return {
        color: 'text-green-700',
        bg: 'bg-green-50',
        icon: <FiCheckCircle size={14} />,
      };
    }

    if (
      value.includes('cancel') ||
      value.includes('fail')
    ) {
      return {
        color: 'text-red-600',
        bg: 'bg-red-50',
        icon: <FiClock size={14} />,
      };
    }

    if (
      value.includes('ship') ||
      value.includes('dispatch')
    ) {
      return {
        color: 'text-blue-700',
        bg: 'bg-blue-50',
        icon: <FiTruck size={14} />,
      };
    }

    return {
      color: 'text-[#8d7655]',
      bg: 'bg-[#f3eee6]',
      icon: <FiClock size={14} />,
    };

  };

  return (

    <div className="min-h-screen bg-[#F5F3EE]
      text-[#242622]">

      {/* ================= HEADER ================= */}

      <section className="border-t border-gray-200
        px-4 sm:px-8 pt-12 pb-10">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col sm:flex-row
            sm:items-end sm:justify-between gap-5">

            <div>

              <p className="text-[#a58c69] text-xs
                uppercase tracking-[4px] font-semibold mb-3">
                Your Shopping Journey
              </p>

              <h1 className="text-3xl sm:text-4xl
                font-semibold tracking-tight">
                My Orders
              </h1>

              <p className="text-sm text-gray-500
                mt-3 leading-7">
                Keep track of your purchases and
                explore your order history.
              </p>

            </div>

            <div className="flex items-center gap-3
              bg-white border border-gray-100
              rounded-xl px-5 py-3 w-fit">

              <FiShoppingBag
                size={20}
                className="text-[#a58c69]"
              />

              <span className="text-sm font-medium">
                {orders.length} {orders.length === 1
                  ? 'Order'
                  : 'Orders'}
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ORDERS CONTENT ================= */}

      <section className="max-w-7xl mx-auto
        px-4 sm:px-8 pb-20">

        {/* LOADING STATE */}

        {loading ? (

          <div className="flex flex-col items-center
            justify-center py-28">

            <div className="w-12 h-12 border-4
              border-[#e5dfd3] border-t-[#a58c69]
              rounded-full animate-spin" />

            <p className="text-sm text-gray-500 mt-5">
              Loading your orders...
            </p>

          </div>

        ) : error ? (

          /* ERROR STATE */

          <div className="bg-white rounded-2xl
            border border-gray-100 p-10
            text-center mt-5">

            <FiRefreshCw
              size={32}
              className="text-[#a58c69] mx-auto mb-5"
            />

            <h2 className="text-xl font-semibold mb-3">
              Something went wrong
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              {error}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="bg-[#242622] text-white
                px-7 py-3 rounded-xl text-sm
                hover:bg-[#3a3d36] transition-colors"
            >
              Try Again
            </button>

          </div>

        ) : orders.length === 0 ? (

          /* EMPTY ORDERS */

          <div className="bg-white rounded-2xl
            border border-gray-100 flex flex-col
            items-center text-center py-20 px-5">

            <div className="w-24 h-24 rounded-full
              bg-[#f6f5f2] flex items-center
              justify-center mb-7">

              <FiPackage
                size={38}
                className="text-[#a58c69]"
              />

            </div>

            <p className="text-[#a58c69] text-xs
              uppercase tracking-[4px] font-semibold mb-4">
              Your Order History
            </p>

            <h2 className="text-2xl sm:text-3xl
              font-semibold mb-3">
              No orders yet.
            </h2>

            <p className="text-sm text-gray-500
              max-w-sm leading-7 mb-8">
              You haven't placed any orders yet.
              Explore our collections and find
              something you love.
            </p>

            <button
              onClick={() =>
                window.location.assign('/collection')
              }
              className="bg-[#242622] text-white
                px-8 py-4 rounded-xl text-sm
                font-medium flex items-center gap-3
                hover:bg-[#3a3d36] transition-colors"
            >
              Explore Collection
              <FiArrowRight size={17} />
            </button>

          </div>

        ) : (

          /* ================= ORDER LIST ================= */

          <div className="flex flex-col gap-6">

            {orders.map((order) => {

              const status = order.status || 'Pending';
              const statusStyle = getStatusStyle(status);

              return (

                <div
                  key={order._id}
                  className="bg-white rounded-2xl
                    border border-gray-100 overflow-hidden
                    shadow-[0_4px_20px_rgba(0,0,0,0.025)]
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                    transition-all duration-300"
                >

                  {/* ORDER HEADER */}

                  <div className="p-5 sm:p-7
                    border-b border-gray-100">

                    <div className="flex flex-col
                      sm:flex-row sm:items-center
                      sm:justify-between gap-5">

                      <div>

                        <p className="text-xs
                          text-gray-400 uppercase
                          tracking-widest mb-2">
                          Order Reference
                        </p>

                        <h3 className="text-sm sm:text-base
                          font-semibold text-[#242622]
                          break-all">
                          #{order._id}
                        </h3>

                      </div>

                      <div className="flex flex-wrap
                        items-center gap-3">

                        <span className={`flex items-center
                          gap-2 px-4 py-2 rounded-full
                          text-xs font-semibold
                          ${statusStyle.bg}
                          ${statusStyle.color}`}>

                          {statusStyle.icon}
                          {status}

                        </span>

                      </div>

                    </div>

                    {/* ORDER META */}

                    <div className="flex flex-wrap
                      items-center gap-5 mt-6">

                      {order.createdAt && (

                        <div className="flex items-center
                          gap-2 text-gray-500">

                          <FiCalendar
                            size={15}
                            className="text-[#a58c69]"
                          />

                          <span className="text-xs">
                            {new Date(order.createdAt)
                              .toLocaleDateString('en-IN', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                              })}
                          </span>

                        </div>

                      )}

                      <div className="flex items-center
                        gap-2 text-gray-500">

                        <FiPackage
                          size={15}
                          className="text-[#a58c69]"
                        />

                        <span className="text-xs">
                          {order.items?.length || 0} Products
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* ORDER PRODUCTS */}

                  <div className="p-5 sm:p-7">

                    <p className="text-xs uppercase
                      tracking-widest text-gray-400
                      font-semibold mb-5">
                      Order Items
                    </p>

                    <div className="flex flex-col gap-5">

                      {order.items?.map((item, idx) => (

                        <div
                          key={`${item.name}-${item.size}-${idx}`}
                          className="flex items-center
                            justify-between gap-4"
                        >

                          <div className="flex items-center
                            gap-4 min-w-0">

                            <div className="w-16 h-20
                              sm:w-20 sm:h-24
                              rounded-xl bg-[#f6f5f2]
                              flex items-center justify-center
                              flex-shrink-0">

                              <FiShoppingBag
                                size={24}
                                className="text-[#c3b49b]"
                              />

                            </div>

                            <div className="min-w-0">

                              <h4 className="text-sm
                                font-semibold text-[#242622]
                                truncate">
                                {item.name}
                              </h4>

                              <div className="flex
                                flex-wrap items-center
                                gap-2 mt-2">

                                <span className="text-xs
                                  text-gray-500">
                                  Size: {item.size}
                                </span>

                                <span className="text-gray-300">
                                  |
                                </span>

                                <span className="text-xs
                                  text-gray-500">
                                  Qty: {item.quantity}
                                </span>

                              </div>

                            </div>

                          </div>

                          <div className="text-right
                            flex-shrink-0">

                            <span className="text-xs
                              text-gray-400">
                              Quantity
                            </span>

                            <p className="text-sm font-semibold
                              text-[#242622] mt-1">
                              {item.quantity}
                            </p>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* ORDER FOOTER */}

                  <div className="bg-[#f8f7f4]
                    px-5 sm:px-7 py-5
                    flex flex-col sm:flex-row
                    sm:items-center sm:justify-between
                    gap-5">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10
                        rounded-lg bg-white
                        flex items-center justify-center
                        text-[#a58c69]">

                        <FiCreditCard size={19} />

                      </div>

                      <div>

                        <p className="text-xs text-gray-400">
                          Total Order Amount
                        </p>

                        <p className="text-xl font-semibold
                          text-[#242622] mt-1">
                          ${order.amount}
                        </p>

                      </div>

                    </div>

                    <div className="flex items-center
                      gap-2 text-xs text-gray-500">

                      <FiShieldIcon />

                      Secure order information

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        )}

      </section>

    </div>

  );
};

// Small icon component for the order footer
const FiShieldIcon = () => (
  <FiCheckCircle
    size={16}
    className="text-[#a58c69]"
  />
);

export default Orders;
