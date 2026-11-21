
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import {
  FiShoppingBag,
  FiTruck,
  FiCreditCard,
} from 'react-icons/fi';

const CartTotal = () => {

  const {
    currency,
    delivery_fee,
    getCartAmount
  } = useContext(ShopContext);

  const cartTotal = getCartAmount();

  const finalTotal =
    cartTotal === 0 ? 0 : cartTotal + delivery_fee;

  return (

    <div className="w-full text-[#242622]">

      {/* ================= HEADER ================= */}

      <div className="flex items-center
        justify-between mb-7">

        <div>

          <p className="text-[#a58c69] text-xs
            uppercase tracking-[3px] font-semibold mb-2">
            Payment Details
          </p>

          <div className="text-2xl sm:text-3xl">
            <Title text1="CART" text2="TOTAL" />
          </div>

        </div>

        <div className="w-12 h-12 rounded-xl
          bg-[#F5F3EE] flex items-center
          justify-center text-[#a58c69]">

          <FiShoppingBag size={22} />

        </div>

      </div>

      {/* ================= PRICE DETAILS ================= */}

      <div className="flex flex-col">

        {/* SUBTOTAL */}

        <div className="flex items-center
          justify-between py-4">

          <div className="flex items-center gap-3">

            <FiShoppingBag
              size={17}
              className="text-[#a58c69]"
            />

            <p className="text-sm text-gray-500">
              Subtotal
            </p>

          </div>

          <p className="text-sm font-medium
            text-[#242622]">
            {currency}{cartTotal}.00
          </p>

        </div>

        <div className="border-t border-dashed
          border-gray-200" />

        {/* SHIPPING FEE */}

        <div className="flex items-center
          justify-between py-4">

          <div className="flex items-center gap-3">

            <FiTruck
              size={17}
              className="text-[#a58c69]"
            />

            <p className="text-sm text-gray-500">
              Shipping Fee
            </p>

          </div>

          <p className="text-sm font-medium
            text-[#242622]">
            {currency}{delivery_fee}
          </p>

        </div>

        <div className="border-t border-dashed
          border-gray-200" />

        {/* TOTAL */}

        <div className="bg-[#F5F3EE]
          rounded-xl p-5 mt-5">

          <div className="flex items-center
            justify-between mb-3">

            <div className="flex items-center gap-3">

              <FiCreditCard
                size={18}
                className="text-[#a58c69]"
              />

              <p className="text-sm font-semibold">
                Grand Total
              </p>

            </div>

            <p className="text-2xl font-semibold
              text-[#242622]">
              {currency}{finalTotal}.00
            </p>

          </div>

          <p className="text-xs text-gray-500">
            Including applicable shipping charges.
          </p>

        </div>

      </div>

    </div>

  );

};

export default CartTotal;
