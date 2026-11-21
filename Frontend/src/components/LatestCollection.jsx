
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { FiArrowRight } from 'react-icons/fi'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [filterProducts, setFilterProducts] = useState([])

    useEffect(() => {
        const latest = [...products]
            .sort((a, b) => b.date - a.date)
            .slice(0, 10)

        setFilterProducts(latest)
    }, [products])

    return (
        <section className="my-20 sm:my-24">

            {/* Section Heading */}
            <div className="flex flex-col items-center text-center mb-12 sm:mb-14">

                <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="w-9 h-px bg-[#A58C69]"></span>
                    <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#A58C69]">
                        Fresh From FOREVER
                    </p>
                    <span className="w-9 h-px bg-[#A58C69]"></span>
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl text-[#242622]">
                    <Title text1="Latest" text2="Collections" />
                </div>

                <p className="mt-4 max-w-xl px-4 text-sm sm:text-base leading-7 text-[#77766F]">
                    Explore our newest arrivals, thoughtfully selected to bring
                    effortless elegance and modern style to your everyday wardrobe.
                </p>

            </div>

            {/* Products Grid */}
            {filterProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 sm:gap-x-5 gap-y-10 sm:gap-y-12">

                    {filterProducts.map((item) => (
                        <div
                            key={item._id}
                            className="group"
                        >
                            <ProductItem
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        </div>
                    ))}

                </div>
            ) : (
                <div className="py-16 text-center">
                    <p className="text-sm text-[#77766F]">
                        New collections are coming soon. Stay tuned!
                    </p>
                </div>
            )}

            {/* View All Button */}
            <div className="flex justify-center mt-14">
                <a
                    href="/collection"
                    className="group inline-flex items-center gap-4 border border-[#242622] px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.16em] text-[#242622] hover:bg-[#242622] hover:text-white transition-all duration-300"
                >
                    Explore All Collections
                    <FiArrowRight
                        size={17}
                        className="group-hover:translate-x-1 transition-transform"
                    />
                </a>
            </div>

        </section>
    )
}

export default LatestCollection
