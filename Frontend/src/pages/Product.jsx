import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { toast } from 'react-toastify'; // ✅ Toastify import

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productsData, setProductsData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    if (products.length > 0) {
      const item = products.find((p) => p._id === productId);
      if (item) {
        setProductsData(item);
        setImage(item.image[0]);
      } else {
        console.warn('Product not found for ID:', productId);
      }
    }
  }, [productId, products]);

  const handleAddToCart = () => {
    if (!size) {
      toast.warning('Please select a size before adding to cart!');
      return;
    }

    addToCart(productsData._id, size);
    toast.success('Item added ');
  };

  return productsData ? (
    <div className='border-t-2 pt-10'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* ----------Image Section---------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productsData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt='' />
          </div>
        </div>

        {/* ----------Product Info Section---------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productsData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt='' className='w-3.5' />
            <img src={assets.star_icon} alt='' className='w-3.5' />
            <img src={assets.star_icon} alt='' className='w-3.5' />
            <img src={assets.star_dull_icon} alt='' className='w-3.5' />
            <p>122</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>
            {currency}
            {productsData.price}
          </p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productsData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select the size</p>
            <div className='flex gap-2'>
              {productsData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ----------Add to Cart Button---------- */}
          <button
            onClick={handleAddToCart}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            Add to cart
          </button>

          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 flex flex-col mt-4'>
            <p> 100% Original product</p>
            <p> Cash on delivery is available on this product</p>
            <p> Exchange and return policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* ----------Description & Reviews---------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>
            Elevate your everyday with our meticulously selected range of artisanal products, each
            piece telling a unique story of skilled craftsmanship and dedication to sustainable
            practices...
          </p>
          <p>
            Discover a curated collection of ethically sourced and eco-friendly essentials...
          </p>
        </div>
      </div>

      {/* ----------Related Products---------- */}
      <RelatedProducts category={productsData.category} subCategory={productsData.subCategory} />
    </div>
  ) : (
    <div className='opacity-0'>Loading...</div>
  );
};

export default Product;
