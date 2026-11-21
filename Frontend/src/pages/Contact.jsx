
import React from 'react';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiBriefcase,
  FiArrowUpRight,
  FiClock,
  FiMessageCircle,
} from 'react-icons/fi';

import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (

    <div className="bg-[#F5F3EE] min-h-screen text-[#242622]">

      {/* ================= PAGE HEADER ================= */}

      <section className="border-t border-gray-100 pt-12 pb-8 px-4">

        <div className="text-center">

          <p className="text-[#a58c69] text-xs
            uppercase tracking-[4px] font-semibold mb-3">
            Get In Touch
          </p>

          <div className="text-3xl sm:text-4xl">
            <Title text1="CONTACT" text2="US" />
          </div>

          <p className="text-gray-500 text-sm
            max-w-lg mx-auto mt-4 leading-7 px-3">
            Have a question, need assistance, or simply
            want to connect? We'd love to hear from you.
          </p>

        </div>

      </section>

      {/* ================= CONTACT MAIN SECTION ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-8
        py-8 sm:py-12">

        <div className="grid grid-cols-1 md:grid-cols-2
          gap-10 lg:gap-20 items-center">

          {/* IMAGE SECTION */}

          <div className="relative group">

            <div className="absolute -top-4 -left-4
              w-28 h-28 border border-[#d7c4a3] z-0" />

            <img
              src={assets.contact_img}
              alt="Contact FOREVER store"
              className="relative z-10 w-full h-[350px]
                sm:h-[460px] object-cover rounded-sm
                transition-transform duration-700
                group-hover:scale-[1.01]"
            />

            <div className="absolute -bottom-5 -right-4
              bg-[#242622] text-white px-6 py-5 z-20
              hidden sm:block">

              <p className="text-[#d7c4a3] text-xs
                uppercase tracking-widest mb-1">
                FOREVER
              </p>

              <p className="text-lg font-medium">
                We're here for you.
              </p>

            </div>

          </div>

          {/* CONTACT INFORMATION */}

          <div className="flex flex-col gap-8">

            <div>

              <p className="text-[#a58c69] text-xs
                uppercase tracking-[3px] font-semibold mb-4">
                Let's Connect
              </p>

              <h2 className="text-3xl sm:text-4xl
                font-medium leading-tight mb-5">
                We'd love to
                <br />
                <span className="text-[#a58c69]">
                  hear from you.
                </span>
              </h2>

              <p className="text-gray-500 text-sm leading-8">
                Whether you have questions about our products,
                orders, or services, our team is ready to help
                make your shopping experience better.
              </p>

            </div>

            {/* STORE ADDRESS */}

            <div className="flex gap-5 p-5 bg-[#f6f5f2]
              rounded-xl group hover:bg-[#efede7]
              transition-colors">

              <div className="w-12 h-12 flex-shrink-0
                rounded-xl bg-white flex items-center
                justify-center text-[#a58c69]">

                <FiMapPin size={22} />

              </div>

              <div>

                <h3 className="font-semibold text-base mb-2">
                  Our Store
                </h3>

                <p className="text-gray-500 text-sm leading-7">
                  57076 Los Anglies
                  <br />
                  Suite 350, Washingtoone, USA
                </p>

              </div>

            </div>

            {/* PHONE AND EMAIL */}

            <div className="grid grid-cols-1 sm:grid-cols-2
              gap-4">

              <a
                href="tel:+1415550086255"
                className="border border-gray-200
                  rounded-xl p-5 hover:border-[#a58c69]
                  transition-colors group"
              >

                <div className="w-11 h-11 rounded-xl
                  bg-[#f6f5f2] flex items-center
                  justify-center text-[#a58c69] mb-4">
                  <FiPhone size={20} />
                </div>

                <h3 className="font-semibold text-sm mb-2">
                  Call Us
                </h3>

                <p className="text-gray-500 text-xs
                  group-hover:text-[#a58c69] transition-colors">
                  (415) 55-0086255
                </p>

              </a>

              <a
                href="mailto:neverforgent00@gmail.com"
                className="border border-gray-200
                  rounded-xl p-5 hover:border-[#a58c69]
                  transition-colors group"
              >

                <div className="w-11 h-11 rounded-xl
                  bg-[#f6f5f2] flex items-center
                  justify-center text-[#a58c69] mb-4">
                  <FiMail size={20} />
                </div>

                <h3 className="font-semibold text-sm mb-2">
                  Email Us
                </h3>

                <p className="text-gray-500 text-xs
                  break-all group-hover:text-[#a58c69]
                  transition-colors">
                  neverforgent00@gmail.com
                </p>

              </a>

            </div>

            {/* SUPPORT INFORMATION */}

            <div className="flex items-center gap-3
              text-gray-500">

              <FiMessageCircle
                className="text-[#a58c69]"
                size={19}
              />

              <p className="text-xs">
                We're happy to assist with your enquiries.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CAREERS SECTION ================= */}

      <section className="max-w-7xl mx-auto px-4
        sm:px-8 py-16 sm:py-20">

        <div className="bg-[#f6f5f2] rounded-2xl
          overflow-hidden grid grid-cols-1 md:grid-cols-2">

          {/* CAREERS CONTENT */}

          <div className="p-8 sm:p-12 lg:p-16
            flex flex-col justify-center">

            <p className="text-[#a58c69] text-xs
              uppercase tracking-[4px] font-semibold mb-4">
              Grow With Us
            </p>

            <h2 className="text-3xl sm:text-4xl
              font-medium leading-tight mb-5">
              Build your future
              <br />
              with <span className="text-[#a58c69]">
                FOREVER.
              </span>
            </h2>

            <p className="text-gray-500 text-sm leading-8 mb-7">
              We're always interested in connecting with
              passionate people who love creativity, fashion,
              innovation, and delivering great customer
              experiences.
            </p>

            <div className="flex items-center gap-3
              mb-8 text-gray-600">

              <div className="w-11 h-11 rounded-xl
                bg-white flex items-center justify-center
                text-[#a58c69]">

                <FiBriefcase size={20} />

              </div>

              <div>

                <p className="text-sm font-semibold">
                  Careers at FOREVER
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Explore opportunities with our team.
                </p>

              </div>

            </div>

            <button
              type="button"
              onClick={() => window.location.href =
                'mailto:neverforgent00@gmail.com?subject=Career%20Enquiry'}
              className="w-fit bg-[#242622]
                hover:bg-[#3a3d36] text-white
                px-8 py-4 rounded-xl text-sm
                font-medium flex items-center gap-3
                transition-all duration-300 group"
            >

              Explore Careers

              <FiArrowUpRight
                size={18}
                className="group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition-transform"
              />

            </button>

          </div>

          {/* CAREERS VISUAL */}

          <div className="bg-[#242622] text-white
            p-10 sm:p-14 flex flex-col justify-center
            relative overflow-hidden min-h-[320px]">

            <div className="absolute w-72 h-72
              rounded-full border border-white/10
              -top-32 -right-20" />

            <div className="absolute w-80 h-80
              rounded-full border border-white/10
              -bottom-48 -left-20" />

            <div className="relative z-10">

              <p className="text-[#d7c4a3] text-xs
                tracking-[4px] uppercase mb-6">
                Our Philosophy
              </p>

              <h3 className="text-3xl sm:text-4xl
                font-medium leading-tight mb-6">
                Great things
                <br />
                happen when
                <br />
                <span className="text-[#d7c4a3]">
                  we work together.
                </span>
              </h3>

              <div className="w-16 h-[2px]
                bg-[#d7c4a3] mb-6" />

              <p className="text-gray-400 text-sm
                leading-7 max-w-sm">
                Be part of a team that believes in
                creativity, collaboration, and making
                every customer experience special.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= NEWSLETTER ================= */}

      <section className="pb-12">

        <NewsletterBox />

      </section>

    </div>

  );
};

export default Contact;
