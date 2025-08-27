import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [sortOption, setSortOption] = useState('relevant');

  useEffect(() => {
    applyFilters();
  }, [selectedCategories, selectedTypes, selectedPriceRange, sortOption, search, showSearch, products]);

  const handleCategoryChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((cat) => cat !== value) : [...prev, value]
    );
  };

  const handleTypeChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSelectedTypes((prev) =>
      prev.includes(value) ? prev.filter((type) => type !== value) : [...prev, value]
    );
  };

  const applyFilters = () => {
    let filtered = [...products];

    // Debug: Log the first product to see its structure
    if (products.length > 0) {
      console.log('Sample product structure:', products[0]);
    }

    // Search Filter
    if (showSearch && search) {
      filtered = filtered.filter(item =>
        item?.name?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter (case-insensitive)
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((item) => {
        const itemCategory = (item.category || '').toLowerCase();
        return selectedCategories.includes(itemCategory);
      });
    }

    // Type filter (case-insensitive) - IMPROVED VERSION
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((item) => {
        // Check multiple possible property names and convert to lowercase
        const subCategory = (item.subCategory || '').toLowerCase();
        const category = (item.category || '').toLowerCase();
        const type = (item.type || '').toLowerCase();
        
        // Debug: Log what we're comparing
        console.log('Checking item:', {
          subCategory,
          category,
          type,
          selectedTypes
        });
        
        // Check if any selected type matches any of the item's type properties
        return selectedTypes.some(selectedType => 
          subCategory === selectedType || 
          category === selectedType || 
          type === selectedType ||
          subCategory.includes(selectedType) ||
          category.includes(selectedType) ||
          type.includes(selectedType)
        );
      });
    }

    // Price range filter
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter((item) => {
        const price = Number(item.price);
        return price >= min && price <= max;
      });
    }

    // Sorting
    if (sortOption === 'low-high') {
      filtered.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortOption === 'high-low') {
      filtered.sort((a, b) => Number(b.price) - Number(a.price));
    }

    console.log('Final filtered products:', filtered.length);
    setFilterProducts(filtered);
  };

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Section */}
      <div className='min-w-60'>
        <div
          className='my-2 text-xl flex items-center cursor-pointer gap-2 sm:cursor-default'
          onClick={() => setShowFilter(!showFilter)}
        >
          <p>Filters</p>
          <img
            className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="dropdown"
          />
        </div>

        {/* Categories Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-light text-gray-700'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Men', 'Women', 'Kids'].map((category) => (
              <label key={category} className='flex gap-2'>
                <input
                  className='w-3'
                  type='checkbox'
                  value={category}
                  checked={selectedCategories.includes(category.toLowerCase())}
                  onChange={handleCategoryChange}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Type Filter - UPDATED */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-light text-gray-700'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
              <label key={type} className='flex gap-2'>
                <input
                  className='w-3'
                  type='checkbox'
                  value={type.toLowerCase()}
                  checked={selectedTypes.includes(type.toLowerCase())}
                  onChange={handleTypeChange}
                />
                {type}
                {/* Debug info - remove this in production */}
                <span className='text-xs text-gray-400 ml-2'>
                  ({selectedTypes.includes(type.toLowerCase()) ? '✓' : '○'})
                </span>
              </label>
            ))}
          </div>
          {/* Debug info - remove this in production */}
          <div className='mt-2 text-xs text-gray-400'>
            Selected: {selectedTypes.join(', ')}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mb-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-light text-gray-800'>Price Range</p>
          <select
            className='text-sm border px-2 py-1'
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
          >
            <option value=''>All Prices</option>
            <option value='0-50'>0 - $50</option>
            <option value='50-100'>$50 - $100</option>
            <option value='100-200'>$100 - $200</option>
            <option value='200-500'>$200 - $500</option>
          </select>
        </div>
      </div>

      {/* Right Side - Products */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'Collections'} />
          <select
            className='border-2 border-gray-300 text-sm px-2'
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="relevant">Relevant</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>

        {/* Display Products */}
        {filterProducts.length > 0 ? (
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        ) : (
          <div className='text-center text-gray-500 mt-8'>
            <p>No products found matching your filters.</p>
            {/* Debug info - remove this in production */}
            <div className='text-xs mt-2'>
              <p>Total products: {products.length}</p>
              <p>Selected categories: {selectedCategories.join(', ') || 'None'}</p>
              <p>Selected types: {selectedTypes.join(', ') || 'None'}</p>
              <p>Price range: {selectedPriceRange || 'All'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;