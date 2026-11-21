
import React from 'react'
import { assets } from '../assets/assets'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[#EBE8E0] rounded-sm">

            <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[480px] lg:min-h-[600px]">

                {/* Left Content */}
                <div className="flex items-center justify-center px-8 py-16 sm:px-10 lg:px-16 lg:py-20 order-2 sm:order-1">

                    <div className="max-w-lg w-full">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-7">
                            <span className="w-10 h-[1px] bg-[#A58C69]"></span>
                            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8B755A] font-medium">
                                The New Collection
                            </p>
                        </div>

                        {/* Heading */}
                        <h1 className="prata-regular text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.2] text-[#242622]">
                            Style That
                            <br />
                            <span className="italic text-[#A58C69]">
                                Speaks
                            </span>
                            <br />
                            For You.
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base leading-7 text-[#77766F] mt-7 max-w-md">
                            Discover thoughtfully curated fashion that blends
                            timeless elegance with modern everyday style.
                            Find your next favourite look.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap items-center gap-6 mt-9">

                            <a
                                href="/collection"
                                className="group inline-flex items-center gap-4 bg-[#242622] text-white px-7 py-4 text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-[#A58C69] transition-all duration-300"
                            >
                                Shop Collection
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={17} />
                            </a>

                            <a
                                href="/about"
                                className="text-sm text-[#55564F] border-b border-[#A58C69] pb-1 hover:text-[#A58C69] transition-colors"
                            >
                                Discover More
                            </a>

                        </div>

                        {/* Small Brand Detail */}
                        <div className="flex items-center gap-5 mt-14 pt-6 border-t border-[#D5D0C5]">
                            <div>
                                <p className="text-xl prata-regular text-[#242622]">01</p>
                                <p className="text-[10px] uppercase tracking-widest text-[#89877F] mt-1">
                                    New Arrivals
                                </p>
                            </div>

                            <span className="h-9 w-px bg-[#D5D0C5]"></span>

                            <div>
                                <p className="text-xl prata-regular text-[#242622]">Forever</p>
                                <p className="text-[10px] uppercase tracking-widest text-[#89877F] mt-1">
                                    Timeless Fashion
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Image */}
                <div className="relative min-h-[320px] sm:min-h-full order-1 sm:order-2 overflow-hidden">

                    <img
                        src={assets.hero_img}
                        alt="Explore the latest FOREVER fashion collection"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>

                    {/* Image Label */}
                    <div className="absolute bottom-7 left-7 sm:bottom-10 sm:left-10 text-white">
                        <p className="text-[10px] uppercase tracking-[0.3em] mb-2 text-white/80">
                            Curated for You
                        </p>
                        <p className="prata-regular text-2xl sm:text-3xl">
                            Effortless Elegance.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero
