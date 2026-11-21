
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import {
  FiShoppingBag,
  FiTrash2,
  FiArrowRight,
  FiTruck,
  FiShield,
} from 'react-icons/fi';

const Cart = () => {

  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    navigate
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }

    setCartData(tempData);

  }, [cartItems]);

  return (
    <div className="bg-[#F5F3EE] min-h-screen text-[#242622]">

      {/* ================= PAGE HEADER ================= */}

      <section className="border-t border-gray-100 pt-12 pb-8 px-4 sm:px-8">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col sm:flex-row
            sm:items-end sm:justify-between gap-5">

            <div>

              <p className="text-[#a58c69] text-xs
                font-semibold uppercase tracking-[4px] mb-3">
                Your Selection
              </p>

              <div className="text-3xl sm:text-4xl">
                <Title text1="SHOPPING" text2="BAG" />
              </div>

              <p className="text-gray-500 text-sm mt-3">
                Your favourite pieces, all in one place.
              </p>

            </div>

            <div className="flex items-center gap-3
              bg-[#f6f5f2] px-5 py-3 rounded-xl w-fit">

              <FiShoppingBag className="text-[#a58c69]" size={19} />

              <span className="text-sm font-medium">
                {cartData.length} {cartData.length === 1 ? 'Item' : 'Items'}
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CART CONTENT ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-20">

        {cartData.length > 0 ? (

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px]
            gap-10 lg:gap-16 mt-5">

            {/* ================= PRODUCT LIST ================= */}

            <div>

              <div className="hidden sm:grid grid-cols-[1fr_120px_70px]
                border-b border-gray-200 pb-4 text-xs
                uppercase tracking-widest text-gray-400">

                <p>Product Details</p>
                <p className="text-center">Quantity</p>
                <p className="text-right">Remove</p>

              </div>

              <div>

                {cartData.map((item) => {

                  const productsData = products.find(
                    (product) => product._id === item._id
                  );

                  // Avoid rendering if product data is unavailable
                  if (!productsData) return null;

                  return (

                    <div
                      key={`${item._id}-${item.size}`}
                      className="grid grid-cols-[1fr_auto]
                        sm:grid-cols-[1fr_120px_70px]
                        items-center gap-3 sm:gap-5
                        py-6 border-b border-gray-100
                        group"
                    >

                      {/* PRODUCT DETAILS */}

                      <div className="flex items-center gap-4 sm:gap-6">

                        <div className="w-24 h-28 sm:w-32 sm:h-36
                          rounded-xl overflow-hidden bg-[#f6f5f2]
                          flex-shrink-0">

                          <img
                            src={productsData.image[0]}
                            alt={productsData.name}
                            className="w-full h-full object-cover
                              transition-transform duration-500
                              group-hover:scale-105"
                          />

                        </div>

                        <div className="flex flex-col gap-2">

                          <h3 className="text-sm sm:text-base
                            font-semibold text-[#242622] leading-6">
                            {productsData.name}
                          </h3>

                          <p className="text-[#a58c69]
                            text-sm font-medium">
                            {currency}{productsData.price}
                          </p>

                          <div className="flex items-center gap-2">

                            <span className="text-xs text-gray-400">
                              Size:
                            </span>

                            <span className="bg-[#f6f5f2]
                              px-3 py-1 rounded-md text-xs
                              font-medium text-gray-700">
                              {item.size}
                            </span>

                          </div>

                          <p className="text-xs text-gray-400 sm:hidden">
                            Quantity: {item.quantity}
                          </p>

                        </div>

                      </div>

                      {/* QUANTITY INPUT */}

                      <div className="flex justify-center">

                        <input
                          type="number"
                          min={1}
                          value={item.quantity}
                          className="w-14 sm:w-20 border
                            border-gray-200 rounded-lg
                            px-2 py-2 text-center text-sm
                            text-[#242622] outline-none
                            focus:border-[#a58c69]
                            transition-colors"
                          onChange={(e) => {
                            const value = Number(e.target.value);

                            if (value > 0) {
                              updateQuantity(
                                item._id,
                                item.size,
                                value
                              );
                            }
                          }}
                        />

                      </div>

                      {/* REMOVE BUTTON */}

                      <div className="flex justify-end">

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item._id, item.size, 0)
                          }
                          className="w-10 h-10 rounded-full
                            flex items-center justify-center
                            text-gray-400 hover:text-red-500
                            hover:bg-red-50 transition-all"
                          aria-label="Remove product"
                        >

                          <FiTrash2 size={18} />

                        </button>

                      </div>

                    </div>

                  );

                })}

              </div>

              {/* CONTINUE SHOPPING */}

              <button
                type="button"
                onClick={() => navigate('/collection')}
                className="flex items-center gap-3 mt-8
                  text-sm font-medium text-[#a58c69]
                  hover:text-[#242622] transition-colors"
              >

                <FiArrowRight className="rotate-180" size={17} />

                Continue Shopping

              </button>

            </div>

            {/* ================= ORDER SUMMARY ================= */}

            <div className="h-fit lg:sticky lg:top-24">

              <div className="bg-[#f6f5f2] rounded-2xl
                p-6 sm:p-8">

                <p className="text-[#a58c69] text-xs
                  font-semibold uppercase tracking-[3px] mb-3">
                  Checkout
                </p>

                <h2 className="text-2xl font-semibold
                  text-[#242622] mb-7">
                  Order Summary
                </h2>

                {/* EXISTING CART TOTAL COMPONENT */}

                <div className="border-b border-gray-200 pb-5">

                  <CartTotal />

                </div>

                {/* DELIVERY INFORMATION */}

                <div className="flex flex-col gap-5 py-6">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-lg
                      bg-white flex items-center justify-center
                      text-[#a58c69]">
                      <FiTruck size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Reliable Delivery
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        Delivered to your doorstep
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-lg
                      bg-white flex items-center justify-center
                      text-[#a58c69]">
                      <FiShield size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Secure Shopping
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        Safe and secure checkout
                      </p>
                    </div>

                  </div>

                </div>

                {/* CHECKOUT BUTTON */}

                <button
                  type="button"
                  onClick={() => navigate('/place-order')}
                  className="w-full bg-[#242622]
                    hover:bg-[#3a3d36] text-white
                    rounded-xl py-4 px-5 text-sm
                    font-medium flex items-center
                    justify-center gap-3
                    transition-all duration-300 group"
                >

                  Proceed to Checkout

                  <FiArrowRight
                    size={18}
                    className="group-hover:translate-x-1
                      transition-transform"
                  />

                </button>

                <p className="text-center text-xs
                  text-gray-400 mt-5">
                  Thank you for shopping with FOREVER.
                </p>

              </div>

            </div>

          </div>

        ) : (

          /* ================= EMPTY CART ================= */

          <div className="flex flex-col items-center
            justify-center text-center py-24 px-4">

            <div className="w-24 h-24 rounded-full
              bg-[#f6f5f2] flex items-center
              justify-center mb-7">

              <FiShoppingBag
                size={38}
                className="text-[#a58c69]"
              />

            </div>

            <p className="text-[#a58c69] text-xs
              uppercase tracking-[4px] font-semibold mb-4">
              Your Shopping Bag
            </p>

            <h2 className="text-2xl sm:text-3xl
              font-semibold text-[#242622] mb-4">
              Your cart is empty.
            </h2>

            <p className="text-gray-500 text-sm
              leading-7 max-w-md mb-8">
              Looks like you haven't added anything
              to your shopping bag yet. Explore our
              collections and discover something special.
            </p>

            <button
              type="button"
              onClick={() => navigate('/collection')}
              className="bg-[#242622] hover:bg-[#3a3d36]
                text-white px-9 py-4 rounded-xl
                text-sm font-medium flex items-center
                gap-3 transition-all duration-300"
            >

              Explore Collection

              <FiArrowRight size={18} />

            </button>

          </div>

        )}

      </section>

    </div>
  );
};

export default Cart;
