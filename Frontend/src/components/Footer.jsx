
import React from 'react'
import { assets } from '../assets/assets'
import {
    FiArrowUpRight,
    FiInstagram,
    FiFacebook,
    FiTwitter,
    FiMail,
    FiPhone,
    FiMapPin
} from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className="bg-[#242622] text-[#F5F3EE] mt-24">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-12 lg:gap-16">

                    {/* Brand Section */}
                    <div>
                        <img
                            src={assets.logo}
                            alt="FOREVER"
                            className="w-36 mb-6 brightness-0 invert"
                        />

                        <p className="text-sm leading-7 text-[#B9B7AF] max-w-sm">
                            Discover timeless fashion made for everyday elegance.
                            Thoughtfully selected styles, effortless comfort, and
                            quality you can feel.
                        </p>

                        <div className="flex items-center gap-4 mt-8">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full border border-[#55564F] flex items-center justify-center hover:bg-[#A58C69] hover:border-[#A58C69] hover:text-white transition-all duration-300"
                            >
                                <FiInstagram size={17} />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full border border-[#55564F] flex items-center justify-center hover:bg-[#A58C69] hover:border-[#A58C69] hover:text-white transition-all duration-300"
                            >
                                <FiFacebook size={17} />
                            </a>

                            <a
                                href="#"
                                aria-label="Twitter"
                                className="w-10 h-10 rounded-full border border-[#55564F] flex items-center justify-center hover:bg-[#A58C69] hover:border-[#A58C69] hover:text-white transition-all duration-300"
                            >
                                <FiTwitter size={17} />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-[0.18em] uppercase mb-7">
                            Company
                        </h3>

                        <ul className="flex flex-col gap-4 text-sm text-[#B9B7AF]">
                            <li>
                                <a href="/" className="hover:text-[#D7C4A3] transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-[#D7C4A3] transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/collection" className="hover:text-[#D7C4A3] transition-colors">
                                    Collection
                                </a>
                            </li>
                            <li>
                                <a href="/delivery" className="hover:text-[#D7C4A3] transition-colors">
                                    Delivery
                                </a>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="hover:text-[#D7C4A3] transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-[0.18em] uppercase mb-7">
                            Support
                        </h3>

                        <ul className="flex flex-col gap-4 text-sm text-[#B9B7AF]">
                            <li>
                                <a href="/contact" className="hover:text-[#D7C4A3] transition-colors">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="/orders" className="hover:text-[#D7C4A3] transition-colors">
                                    Track Order
                                </a>
                            </li>
                            <li>
                                <a href="/return-policy" className="hover:text-[#D7C4A3] transition-colors">
                                    Returns & Refunds
                                </a>
                            </li>
                            <li>
                                <a href="/faq" className="hover:text-[#D7C4A3] transition-colors">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-[0.18em] uppercase mb-7">
                            Get in Touch
                        </h3>

                        <ul className="flex flex-col gap-5 text-sm text-[#B9B7AF]">
                            <li className="flex items-start gap-3">
                                <FiPhone className="mt-1 text-[#D7C4A3]" />
                                <span>+1-9083574973940</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <FiMail className="mt-1 text-[#D7C4A3]" />
                                <a
                                    href="mailto:neverforgent00@gmail.com"
                                    className="hover:text-[#D7C4A3] transition-colors break-all"
                                >
                                    neverforgent00@gmail.com
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <FiMapPin className="mt-1 text-[#D7C4A3]" />
                                <span>We're here to help with your shopping experience.</span>
                            </li>
                        </ul>

                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 mt-7 text-sm text-[#D7C4A3] hover:text-white transition-colors"
                        >
                            Contact our team
                            <FiArrowUpRight />
                        </a>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="border-t border-[#484941] mt-14 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">

                    <p className="text-xs text-[#A5A49C] text-center">
                        © {new Date().getFullYear()} FOREVER. All rights reserved.
                    </p>

                    <p className="text-xs text-[#A5A49C]">
                        Designed with care for everyday style.
                    </p>

                </div>
            </div>
        </footer>
    )
}

export default Footer
