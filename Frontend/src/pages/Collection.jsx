
import React, { useContext, useMemo, useState } from 'react';
import {
  FiSliders,
  FiChevronDown,
  FiX,
  FiRefreshCw,
  FiShoppingBag,
  FiArrowRight,
} from 'react-icons/fi';

import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [sortOption, setSortOption] = useState('relevant');

  // CATEGORY FILTER
  const handleCategoryChange = (e) => {
    const value = e.target.value.toLowerCase();

    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  // TYPE FILTER
  const handleTypeChange = (e) => {
    const value = e.target.value.toLowerCase();

    setSelectedTypes((prev) =>
      prev.includes(value)
        ? prev.filter((type) => type !== value)
        : [...prev, value]
    );
  };

  // CLEAR ALL FILTERS
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTypes([]);
    setSelectedPriceRange('');
    setSortOption('relevant');
  };

  // CHECK ACTIVE FILTERS
  const activeFilters =
    selectedCategories.length +
    selectedTypes.length +
    (selectedPriceRange ? 1 : 0);

  // FILTER AND SORT PRODUCTS
  const filterProducts = useMemo(() => {

    let filtered = [...(products || [])];

    // SEARCH FILTER
    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item?.name?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // CATEGORY FILTER
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((item) => {
        const itemCategory = (item.category || '').toLowerCase();

        return selectedCategories.includes(itemCategory);
      });
    }

    // TYPE FILTER
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((item) => {

        const subCategory = (item.subCategory || '').toLowerCase();
        const category = (item.category || '').toLowerCase();
        const type = (item.type || '').toLowerCase();

        return selectedTypes.some((selectedType) =>
          subCategory === selectedType ||
          category === selectedType ||
          type === selectedType ||
          subCategory.includes(selectedType) ||
          category.includes(selectedType) ||
          type.includes(selectedType)
        );

      });
    }

    // PRICE RANGE FILTER
    if (selectedPriceRange) {

      const [min, max] = selectedPriceRange.split('-').map(Number);

      filtered = filtered.filter((item) => {
        const price = Number(item.price);

        return price >= min && price <= max;
      });
    }

    // SORTING
    if (sortOption === 'low-high') {
      filtered.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortOption === 'high-low') {
      filtered.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return filtered;

  }, [
    products,
    search,
    showSearch,
    selectedCategories,
    selectedTypes,
    selectedPriceRange,
    sortOption
  ]);

  // FILTER SIDEBAR CONTENT
  const FilterSection = ({ title, children }) => (
    <div className="border border-gray-200 rounded-xl p-5 mb-5">

      <h3 className="text-sm font-semibold text-[#242622]
        mb-5 uppercase tracking-wider">
        {title}
      </h3>

      {children}

    </div>
  );

  const CheckboxItem = ({ label, value, checked, onChange }) => (
    <label className="flex items-center gap-3 cursor-pointer
      group w-fit">

      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-[#8d7655]
          cursor-pointer rounded"
      />

      <span className="text-sm text-gray-500
        group-hover:text-[#242622] transition-colors">
        {label}
      </span>

    </label>
  );

  return (

    <div className="bg-[#F5F3EE] min-h-screen text-[#242622]">

      {/* ================= COLLECTION HEADER ================= */}

      <section className="border-t border-gray-100 pt-12 pb-10 px-4 sm:px-8">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row
            md:items-end md:justify-between gap-6">

            <div>

              <p className="text-[#a58c69] text-xs
                font-semibold tracking-[4px] uppercase mb-3">
                Discover Your Style
              </p>

              <div className="text-3xl sm:text-4xl">
                <Title text1="OUR" text2="COLLECTION" />
              </div>

              <p className="text-gray-500 text-sm
                mt-4 max-w-lg leading-7">
                Explore our carefully curated collection
                of fashion essentials. Find your perfect
                style for every occasion.
              </p>

            </div>

            <div className="flex items-center gap-3
              text-sm text-gray-500">

              <FiShoppingBag size={19}
                className="text-[#a58c69]" />

              <span>
                {filterProducts.length} Products Available
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MAIN COLLECTION ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-20">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* ================= FILTER SIDEBAR ================= */}

          <aside className="w-full lg:w-[250px] flex-shrink-0">

            {/* FILTER HEADER */}

            <div className="flex items-center justify-between
              border-b border-gray-200 pb-4">

              <button
                type="button"
                onClick={() => setShowFilter(!showFilter)}
                className="flex items-center gap-3
                  text-lg font-semibold text-[#242622]
                  lg:cursor-default"
              >

                <FiSliders className="text-[#a58c69]" />

                Filters

                {activeFilters > 0 && (
                  <span className="bg-[#242622] text-white
                    text-xs rounded-full w-5 h-5
                    flex items-center justify-center">
                    {activeFilters}
                  </span>
                )}

                <FiChevronDown
                  className={`lg:hidden transition-transform
                    ${showFilter ? 'rotate-180' : ''}`}
                />

              </button>

              {activeFilters > 0 && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs text-[#a58c69]
                    hover:text-[#242622] font-medium
                    transition-colors"
                >
                  Clear All
                </button>
              )}

            </div>

            {/* FILTER OPTIONS */}

            <div className={`${showFilter ? 'block' : 'hidden'}
              lg:block mt-5`}>

              {/* CATEGORY FILTER */}

              <FilterSection title="Categories">

                <div className="flex flex-col gap-4">

                  {['Men', 'Women', 'Kids'].map((category) => (

                    <CheckboxItem
                      key={category}
                      label={category}
                      value={category}
                      checked={selectedCategories.includes(
                        category.toLowerCase()
                      )}
                      onChange={handleCategoryChange}
                    />

                  ))}

                </div>

              </FilterSection>

              {/* TYPE FILTER */}

              <FilterSection title="Product Type">

                <div className="flex flex-col gap-4">

                  {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (

                    <CheckboxItem
                      key={type}
                      label={type}
                      value={type.toLowerCase()}
                      checked={selectedTypes.includes(
                        type.toLowerCase()
                      )}
                      onChange={handleTypeChange}
                    />

                  ))}

                </div>

              </FilterSection>

              {/* PRICE FILTER */}

              <FilterSection title="Price Range">

                <div className="flex flex-col gap-4">

                  {[
                    { label: 'All Prices', value: '' },
                    { label: '$0 - $50', value: '0-50' },
                    { label: '$50 - $100', value: '50-100' },
                    { label: '$100 - $200', value: '100-200' },
                    { label: '$200 - $500', value: '200-500' },
                  ].map((range) => (

                    <label
                      key={range.value}
                      className="flex items-center gap-3
                        text-sm text-gray-500 cursor-pointer
                        hover:text-[#242622] transition-colors"
                    >

                      <input
                        type="radio"
                        name="priceRange"
                        value={range.value}
                        checked={selectedPriceRange === range.value}
                        onChange={(e) =>
                          setSelectedPriceRange(e.target.value)
                        }
                        className="w-4 h-4 accent-[#8d7655]"
                      />

                      {range.label}

                    </label>

                  ))}

                </div>

              </FilterSection>

              {/* RESET FILTER */}

              {activeFilters > 0 && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="w-full flex items-center
                    justify-center gap-2 border
                    border-gray-200 rounded-xl py-3
                    text-sm text-gray-600
                    hover:bg-[#f6f5f2] transition-colors"
                >
                  <FiRefreshCw size={15} />
                  Reset Filters
                </button>
              )}

            </div>

          </aside>

          {/* ================= PRODUCTS SECTION ================= */}

          <div className="flex-1 min-w-0">

            {/* TOOLBAR */}

            <div className="flex flex-col sm:flex-row
              sm:items-center sm:justify-between
              gap-4 mb-7 pb-5 border-b border-gray-100">

              <div>

                <h2 className="text-lg font-semibold
                  text-[#242622]">
                  Explore Products
                </h2>

                <p className="text-xs text-gray-400 mt-1">
                  Showing {filterProducts.length} results
                </p>

              </div>

              <div className="flex items-center gap-3">

                <span className="text-xs text-gray-500
                  whitespace-nowrap">
                  Sort by:
                </span>

                <div className="relative flex-1 sm:flex-none">

                  <select
                    className="w-full sm:w-auto appearance-none
                      border border-gray-200 rounded-lg
                      bg-white pl-4 pr-10 py-3 text-sm
                      text-[#242622] outline-none
                      focus:border-[#a58c69] cursor-pointer"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >

                    <option value="relevant">Relevant</option>
                    <option value="low-high">Price: Low to High</option>
                    <option value="high-low">Price: High to Low</option>

                  </select>

                  <FiChevronDown
                    className="absolute right-3 top-1/2
                      -translate-y-1/2 pointer-events-none
                      text-gray-400"
                    size={16}
                  />

                </div>

              </div>

            </div>

            {/* ACTIVE FILTER TAGS */}

            {activeFilters > 0 && (

              <div className="flex flex-wrap items-center
                gap-2 mb-7">

                {selectedCategories.map((category) => (

                  <button
                    key={category}
                    onClick={() =>
                      setSelectedCategories((prev) =>
                        prev.filter((item) => item !== category)
                      )
                    }
                    className="flex items-center gap-2
                      bg-[#f6f5f2] rounded-full px-3 py-2
                      text-xs text-gray-600"
                  >
                    {category}
                    <FiX size={13} />
                  </button>

                ))}

                {selectedTypes.map((type) => (

                  <button
                    key={type}
                    onClick={() =>
                      setSelectedTypes((prev) =>
                        prev.filter((item) => item !== type)
                      )
                    }
                    className="flex items-center gap-2
                      bg-[#f6f5f2] rounded-full px-3 py-2
                      text-xs text-gray-600"
                  >
                    {type}
                    <FiX size={13} />
                  </button>

                ))}

                {selectedPriceRange && (

                  <button
                    onClick={() => setSelectedPriceRange('')}
                    className="flex items-center gap-2
                      bg-[#f6f5f2] rounded-full px-3 py-2
                      text-xs text-gray-600"
                  >
                    ${selectedPriceRange.replace('-', ' - $')}
                    <FiX size={13} />
                  </button>

                )}

              </div>

            )}

            {/* PRODUCT GRID */}

            {filterProducts.length > 0 ? (

              <div className="grid grid-cols-2 sm:grid-cols-3
                xl:grid-cols-4 gap-x-4 sm:gap-x-6
                gap-y-10">

                {filterProducts.map((item) => (

                  <div
                    key={item._id}
                    className="group min-w-0"
                  >

                    <ProductItem
                      id={item._id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                    />

                  </div>

                ))}

              </div>

            ) : (

              /* ================= EMPTY RESULTS ================= */

              <div className="flex flex-col items-center
                justify-center text-center py-24 px-5">

                <div className="w-20 h-20 rounded-full
                  bg-[#f6f5f2] flex items-center
                  justify-center mb-6">

                  <FiShoppingBag
                    size={32}
                    className="text-[#a58c69]"
                  />

                </div>

                <p className="text-[#a58c69] text-xs
                  tracking-[3px] uppercase font-semibold mb-3">
                  No Matches Found
                </p>

                <h3 className="text-2xl font-semibold
                  text-[#242622] mb-3">
                  Nothing here just yet.
                </h3>

                <p className="text-sm text-gray-500
                  max-w-sm leading-7 mb-7">
                  We couldn't find products matching
                  your current selection. Try adjusting
                  your filters to discover more styles.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="bg-[#242622] text-white
                    rounded-xl px-7 py-3.5 text-sm
                    flex items-center gap-3
                    hover:bg-[#3a3d36] transition-colors"
                >
                  Clear Filters
                  <FiArrowRight size={16} />
                </button>

              </div>

            )}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Collection;
