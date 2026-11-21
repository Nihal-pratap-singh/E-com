
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { toast } from 'react-toastify';

import {
  FiShoppingBag,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiCheckCircle,
  FiHeart,
  FiArrowRight,
  FiPackage,
} from 'react-icons/fi';

const Product = () => {

  const { productId } = useParams();

  const { products, currency, addToCart } =
    useContext(ShopContext);

  const [productsData, setProductsData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  // FETCH PRODUCT DATA
  useEffect(() => {

    if (products.length > 0) {

      const item = products.find(
        (p) => p._id === productId
      );

      if (item) {
        setProductsData(item);
        setImage(item.image?.[0] || '');
        setSize('');
      } else {
        setProductsData(null);
        console.warn('Product not found for ID:', productId);
      }

    }

  }, [productId, products]);

  // ADD TO CART
  const handleAddToCart = () => {

    if (!size) {
      toast.warning('Please select a size before adding to cart!');
      return;
    }

    addToCart(productsData._id, size);

    toast.success('Item added to your shopping bag!');

  };

  // LOADING STATE
  if (!productsData) {
    return (
      <div className="min-h-[60vh] bg-[#F5F3EE]
        flex flex-col items-center justify-center">

        <div className="w-12 h-12 border-4 border-[#e5dfd3]
          border-t-[#a58c69] rounded-full animate-spin" />

        <p className="text-sm text-gray-500 mt-5">
          Loading product details...
        </p>

      </div>
    );
  }

  return (

    <div className="bg-[#F5F3EE] min-h-screen text-[#242622]">

      {/* ================= PRODUCT DETAILS ================= */}

      <section className="border-t border-gray-200
        px-4 sm:px-8 pt-10 sm:pt-14 pb-16">

        <div className="max-w-7xl mx-auto">

          {/* BREADCRUMB */}

          <div className="flex items-center gap-2
            text-xs text-gray-400 mb-8">

            <span>Home</span>

            <FiArrowRight size={12} />

            <span>Collection</span>

            <FiArrowRight size={12} />

            <span className="text-[#a58c69] font-medium
              truncate">
              {productsData.name}
            </span>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2
            gap-10 lg:gap-16 items-start">

            {/* ================= IMAGE GALLERY ================= */}

            <div className="flex flex-col-reverse
              sm:flex-row gap-4">

              {/* THUMBNAILS */}

              <div className="flex sm:flex-col gap-3
                overflow-x-auto sm:overflow-y-auto
                sm:max-h-[620px] sm:w-[100px]
                flex-shrink-0">

                {productsData.image.map((item, index) => (

                  <button
                    key={index}
                    type="button"
                    onClick={() => setImage(item)}
                    className={`w-20 h-24 sm:w-full sm:h-28
                      flex-shrink-0 overflow-hidden rounded-xl
                      border-2 transition-all duration-300
                      ${image === item
                        ? 'border-[#a58c69] opacity-100'
                        : 'border-transparent opacity-65 hover:opacity-100'
                      }`}
                  >

                    <img
                      src={item}
                      alt={`${productsData.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />

                  </button>

                ))}

              </div>

              {/* MAIN IMAGE */}

              <div className="flex-1 relative
                bg-white rounded-2xl overflow-hidden
                min-h-[350px] sm:min-h-[550px]">

                <img
                  src={image || productsData.image?.[0]}
                  alt={productsData.name}
                  className="w-full h-full min-h-[350px]
                    sm:min-h-[550px] object-cover
                    transition-transform duration-700
                    hover:scale-105"
                />

                <div className="absolute top-5 left-5
                  bg-[#242622] text-white text-xs
                  tracking-widest uppercase
                  px-4 py-2 rounded-full">
                  FOREVER Collection
                </div>

                <div className="absolute bottom-5 right-5
                  bg-white/90 backdrop-blur-sm
                  text-[#242622] p-3 rounded-full">
                  <FiShoppingBag size={20} />
                </div>

              </div>

            </div>

            {/* ================= PRODUCT INFORMATION ================= */}

            <div className="bg-white rounded-2xl
              p-6 sm:p-9 lg:p-10">

              <p className="text-[#a58c69] text-xs
                uppercase tracking-[4px] font-semibold mb-4">
                Premium Collection
              </p>

              {/* PRODUCT NAME */}

              <h1 className="text-2xl sm:text-3xl
                lg:text-4xl font-semibold leading-tight
                text-[#242622]">
                {productsData.name}
              </h1>

              {/* RATING */}

              <div className="flex items-center gap-3
                mt-5 pb-6 border-b border-gray-100">

                <div className="flex items-center gap-1">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <img
                      key={star}
                      src={
                        star <= 3
                          ? assets.star_icon
                          : assets.star_dull_icon
                      }
                      alt=""
                      className="w-4"
                    />

                  ))}

                </div>

                <span className="text-sm text-gray-500">
                  122 Reviews
                </span>

                <span className="w-1 h-1 bg-gray-300 rounded-full" />

                <span className="text-xs text-green-700
                  font-medium">
                  Customer Favourite
                </span>

              </div>

              {/* PRICE */}

              <div className="py-6 border-b border-gray-100">

                <p className="text-xs text-gray-400
                  uppercase tracking-widest mb-2">
                  Price
                </p>

                <div className="flex items-center gap-3">

                  <h2 className="text-3xl font-semibold
                    text-[#242622]">
                    {currency}{productsData.price}
                  </h2>

                </div>

                <p className="text-xs text-gray-400 mt-2">
                  Inclusive of applicable taxes
                </p>

              </div>

              {/* DESCRIPTION */}

              <div className="py-6">

                <h3 className="font-semibold text-sm mb-3">
                  Product Description
                </h3>

                <p className="text-sm text-gray-500
                  leading-8">
                  {productsData.description}
                </p>

              </div>

              {/* SIZE SELECTION */}

              <div className="border-t border-gray-100 pt-6">

                <div className="flex items-center
                  justify-between mb-4">

                  <h3 className="text-sm font-semibold">
                    Select Your Size
                  </h3>

                  <span className="text-xs text-gray-400">
                    Required
                  </span>

                </div>

                <div className="flex flex-wrap gap-3">

                  {productsData.sizes.map((item, index) => (

                    <button
                      key={index}
                      type="button"
                      onClick={() => setSize(item)}
                      className={`min-w-[55px] h-12
                        px-4 rounded-lg border
                        text-sm font-medium transition-all
                        duration-200
                        ${item === size
                          ? 'bg-[#242622] text-white border-[#242622]'
                          : 'bg-[#F5F3EE] text-gray-600 border-transparent hover:border-[#a58c69]'
                        }`}
                    >
                      {item}
                    </button>

                  ))}

                </div>

                {!size && (
                  <p className="text-xs text-gray-400 mt-3">
                    Please choose a size to continue.
                  </p>
                )}

              </div>

              {/* ADD TO CART */}

              <div className="flex flex-col gap-3 mt-8">

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full bg-[#242622]
                    hover:bg-[#3a3d36] text-white
                    py-4 px-6 rounded-xl text-sm
                    font-semibold flex items-center
                    justify-center gap-3
                    transition-all duration-300
                    group"
                >

                  <FiShoppingBag size={19} />

                  Add To Shopping Bag

                  <FiArrowRight
                    size={17}
                    className="group-hover:translate-x-1
                      transition-transform"
                  />

                </button>

                <p className="text-center text-xs
                  text-gray-400">
                  Select your size before adding to cart.
                </p>

              </div>

              {/* PRODUCT BENEFITS */}

              <div className="border-t border-gray-100
                mt-8 pt-7 flex flex-col gap-5">

                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-lg
                    bg-[#F5F3EE] flex items-center
                    justify-center text-[#a58c69]">
                    <FiCheckCircle size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      100% Original Product
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Quality you can trust
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-lg
                    bg-[#F5F3EE] flex items-center
                    justify-center text-[#a58c69]">
                    <FiTruck size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      Cash on Delivery
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Available on this product
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-lg
                    bg-[#F5F3EE] flex items-center
                    justify-center text-[#a58c69]">
                    <FiRefreshCw size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      7-Day Return Policy
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Exchange and returns within 7 days
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-lg
                    bg-[#F5F3EE] flex items-center
                    justify-center text-[#a58c69]">
                    <FiShield size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      Secure Shopping
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Shop with confidence
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= DESCRIPTION & REVIEWS ================= */}

      <section className="max-w-7xl mx-auto
        px-4 sm:px-8 pb-16">

        <div className="bg-white rounded-2xl
          overflow-hidden border border-gray-100">

          {/* TABS */}

          <div className="flex border-b border-gray-100">

            <button
              type="button"
              onClick={() => setActiveTab('description')}
              className={`px-6 sm:px-9 py-5 text-sm
                font-semibold transition-colors
                ${activeTab === 'description'
                  ? 'text-[#242622] border-b-2 border-[#a58c69]'
                  : 'text-gray-400 hover:text-[#242622]'
                }`}
            >
              Description
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('reviews')}
              className={`px-6 sm:px-9 py-5 text-sm
                font-semibold transition-colors
                ${activeTab === 'reviews'
                  ? 'text-[#242622] border-b-2 border-[#a58c69]'
                  : 'text-gray-400 hover:text-[#242622]'
                }`}
            >
              Reviews (122)
            </button>

          </div>

          {/* TAB CONTENT */}

          <div className="p-6 sm:p-9">

            {activeTab === 'description' ? (

              <div className="flex flex-col gap-5">

                <h3 className="text-lg font-semibold">
                  About This Product
                </h3>

                <p className="text-sm text-gray-500
                  leading-8">
                  {productsData.description}
                </p>

                <p className="text-sm text-gray-500
                  leading-8">
                  Elevate your everyday style with our
                  carefully selected collection. Each
                  piece is designed to bring together
                  comfort, quality, and contemporary fashion.
                </p>

                <p className="text-sm text-gray-500
                  leading-8">
                  Discover a collection that complements
                  your personal style and makes every
                  occasion feel special.
                </p>

              </div>

            ) : (

              <div className="flex flex-col gap-4">

                <h3 className="text-lg font-semibold">
                  Customer Reviews
                </h3>

                <div className="bg-[#F5F3EE] rounded-xl
                  p-5 sm:p-7">

                  <div className="flex items-center gap-2 mb-3">

                    {[1, 2, 3, 4].map((star) => (

                      <img
                        key={star}
                        src={assets.star_icon}
                        alt=""
                        className="w-4"
                      />

                    ))}

                    <img
                      src={assets.star_dull_icon}
                      alt=""
                      className="w-4"
                    />

                  </div>

                  <p className="text-sm text-gray-500
                    leading-7">
                    Customer reviews will appear here
                    when review functionality is connected
                    to your application.
                  </p>

                </div>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* ================= RELATED PRODUCTS ================= */}

      <section className="pb-20">

        <RelatedProducts
          category={productsData.category}
          subCategory={productsData.subCategory}
        />

      </section>

    </div>

  );
};

export default Product;
