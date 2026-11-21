
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import {
  FiArrowRight,
  FiShoppingBag,
  FiStar,
} from 'react-icons/fi';

const BestSeller = () => {

  const { products } = useContext(ShopContext);

  const [bestSeller, setBestSeller] = useState([]);

  // EXISTING BESTSELLER FILTERING LOGIC
  useEffect(() => {

    const bestProducts = products.filter((item) =>
      item.bestSeller === true ||
      item.bestSeller === "true"
    );

    setBestSeller(bestProducts.slice(0, 5));

  }, [products]);

  return (

    <section className="my-16 sm:my-20 bg-[#F5F3EE]
      py-14 sm:py-20 px-4 sm:px-8">

      <div className="max-w-7xl mx-auto">

        {/* ================= SECTION HEADER ================= */}

        <div className="flex flex-col items-center
          text-center mb-12 sm:mb-16">

          {/* EYEBROW TEXT */}

          <div className="flex items-center gap-2 mb-5">

            <span className="w-8 h-[1px] bg-[#a58c69]" />

            <p className="text-[#a58c69] text-xs
              uppercase tracking-[4px] font-semibold">
              Customer Favourites
            </p>

            <span className="w-8 h-[1px] bg-[#a58c69]" />

          </div>

          {/* MAIN TITLE */}

          <div className="text-3xl sm:text-4xl lg:text-5xl">

            <Title
              text1="BEST"
              text2="SELLERS"
            />

          </div>

          {/* DESCRIPTION */}

          <p className="text-gray-500 text-sm sm:text-base
            max-w-2xl mx-auto mt-5 leading-8">
            Discover the styles everyone is loving.
            Explore our most popular picks, thoughtfully
            selected to bring quality, comfort, and
            effortless style into your wardrobe.
          </p>

          {/* PRODUCT COUNT */}

          <div className="flex items-center gap-2 mt-6
            bg-white px-5 py-2.5 rounded-full
            border border-[#e9e5dc]">

            <FiStar
              size={15}
              className="text-[#a58c69]"
            />

            <span className="text-xs font-medium
              text-[#242622]">
              Our Most Loved Collections
            </span>

          </div>

        </div>

        {/* ================= PRODUCT GRID ================= */}

        {bestSeller.length > 0 ? (

          <div className="grid grid-cols-2 sm:grid-cols-3
            md:grid-cols-4 lg:grid-cols-5
            gap-x-4 sm:gap-x-6 gap-y-9">

            {bestSeller.map((item) => (

              <div
                key={item._id}
                className="group min-w-0"
              >

                <ProductItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />

              </div>

            ))}

          </div>

        ) : (

          /* ================= EMPTY STATE ================= */

          <div className="bg-white rounded-2xl
            border border-[#e9e5dc] py-16 px-5
            flex flex-col items-center text-center">

            <div className="w-16 h-16 rounded-full
              bg-[#F5F3EE] flex items-center
              justify-center mb-5">

              <FiShoppingBag
                size={28}
                className="text-[#a58c69]"
              />

            </div>

            <h3 className="text-xl font-semibold
              text-[#242622] mb-3">
              Coming Soon
            </h3>

            <p className="text-sm text-gray-500
              max-w-sm leading-7">
              Our best-selling products will appear here.
              Stay tuned for our most loved styles.
            </p>

          </div>

        )}

        {/* ================= BOTTOM MESSAGE ================= */}

        {bestSeller.length > 0 && (

          <div className="flex flex-col items-center
            mt-14 sm:mt-16">

            <div className="w-16 h-[1px]
              bg-[#d7c4a3] mb-6" />

            <p className="text-gray-500 text-xs
              tracking-widest uppercase">
              Curated for your everyday style
            </p>

          </div>

        )}

      </div>

    </section>

  );

};

export default BestSeller;
