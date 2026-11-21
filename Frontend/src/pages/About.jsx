
import React from 'react';
import {
  FiShield,
  FiTruck,
  FiHeart,
  FiArrowUpRight,
  FiCheckCircle,
} from 'react-icons/fi';

import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {

  const features = [
    {
      icon: <FiShield size={25} />,
      number: '01',
      title: 'Quality Assurance',
      description:
        'Every product is carefully selected and inspected to meet our quality standards. We believe great style should always come with great quality.',
    },
    {
      icon: <FiTruck size={25} />,
      number: '02',
      title: 'Shopping Made Easy',
      description:
        'Enjoy a seamless shopping experience with simple navigation, secure checkout, and reliable delivery right to your doorstep.',
    },
    {
      icon: <FiHeart size={25} />,
      number: '03',
      title: 'Customer First',
      description:
        'Your satisfaction matters to us. Our dedicated support team is here to make every interaction smooth, helpful, and memorable.',
    },
  ];

  return (
    <div className="bg-white text-[#242622] overflow-hidden">

      {/* HERO SECTION */}
      <section className="pt-10 pb-6 border-t border-gray-100">

        <div className="text-center mb-12">
          <p className="text-[#a58c69] text-xs tracking-[4px]
            uppercase font-semibold mb-3">
            Our Story
          </p>

          <div className="text-3xl sm:text-4xl">
            <Title text1="ABOUT" text2="US" />
          </div>

          <p className="text-gray-500 text-sm mt-4
            max-w-lg mx-auto px-4 leading-7">
            More than fashion. A commitment to quality,
            confidence, and a better shopping experience.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-10
          lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10
          lg:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative group">

            <div className="absolute -top-4 -left-4
              w-28 h-28 border border-[#d7c4a3] z-0" />

            <img
              src={assets.about_img}
              alt="About our fashion store"
              className="relative z-10 w-full h-[350px]
                sm:h-[450px] object-cover rounded-sm
                transition-transform duration-700
                group-hover:scale-[1.01]"
            />

            <div className="absolute -bottom-5 -right-4
              bg-[#242622] text-white z-20 px-6 py-5
              hidden sm:block">
              <p className="text-[#d7c4a3] text-xs
                tracking-widest uppercase mb-1">
                Our Philosophy
              </p>
              <p className="text-lg font-medium">
                Style meets comfort.
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-6">

            <div>
              <p className="text-[#a58c69] text-xs
                tracking-[3px] uppercase font-semibold mb-4">
                Who We Are
              </p>

              <h2 className="text-3xl sm:text-4xl
                leading-tight font-medium mb-5">
                Redefining the way
                <br />
                <span className="text-[#a58c69]">
                  you experience
                </span>
                <br />
                fashion.
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-8">
              Welcome to FOREVER — your destination for
              trendy, high-quality fashion and everyday
              essentials. We bring together style, comfort,
              and value to make shopping effortless.
            </p>

            <p className="text-gray-500 text-sm leading-8">
              We are dedicated to offering products that
              combine modern design with affordability.
              From discovering your favourite styles to
              receiving your order, we aim to make every
              step of your shopping journey enjoyable.
            </p>

            <div className="border-l-[3px] border-[#a58c69]
              pl-5 py-2 mt-2">
              <h3 className="font-semibold text-lg mb-2">
                Our Mission
              </h3>

              <p className="text-gray-500 text-sm leading-7">
                To empower every customer with a seamless
                shopping experience through quality products,
                exceptional value, and dependable service —
                while staying inspired by evolving styles
                and trends.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <FiCheckCircle className="text-[#a58c69]"
                size={20} />
              <span className="text-sm font-medium">
                Designed around your shopping experience
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#f6f5f2] mt-24 py-20 px-5 sm:px-10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-[#a58c69] text-xs
              uppercase tracking-[4px] font-semibold mb-3">
              The Difference
            </p>

            <div className="text-3xl sm:text-4xl">
              <Title
                text1="WHY"
                text2="CHOOSE US"
              />
            </div>

            <p className="text-gray-500 text-sm
              max-w-xl mx-auto mt-4 leading-7">
              We focus on the little things that make
              your shopping experience extraordinary.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3
            gap-5">

            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 sm:p-10
                  border border-gray-100
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]
                  group"
              >

                <div className="flex items-center
                  justify-between mb-9">

                  <div className="w-14 h-14 rounded-xl
                    bg-[#f3eee6] text-[#8d7655]
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:bg-[#242622]
                    group-hover:text-white">
                    {feature.icon}
                  </div>

                  <span className="text-gray-300
                    text-sm font-medium tracking-widest">
                    {feature.number}
                  </span>

                </div>

                <h3 className="text-xl font-semibold
                  mb-4 text-[#242622]">
                  {feature.title}
                </h3>

                <p className="text-gray-500 text-sm
                  leading-7">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center
                  justify-between border-t border-gray-100
                  pt-5">

                  <span className="text-xs uppercase
                    tracking-widest text-[#a58c69]">
                    FOREVER
                  </span>

                  <FiArrowUpRight
                    className="text-gray-400
                      group-hover:text-[#a58c69]
                      transition-colors"
                    size={19}
                  />

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BRAND MESSAGE */}
      <section className="max-w-7xl mx-auto px-5
        sm:px-10 py-20">

        <div className="bg-[#242622] rounded-2xl
          px-7 py-12 sm:px-14 sm:py-16
          text-center text-white relative overflow-hidden">

          <div className="absolute w-64 h-64
            rounded-full border border-white/10
            -top-32 -right-20" />

          <div className="absolute w-72 h-72
            rounded-full border border-white/10
            -bottom-48 -left-20" />

          <div className="relative z-10">

            <p className="text-[#d7c4a3] text-xs
              uppercase tracking-[4px] mb-5">
              Experience FOREVER
            </p>

            <h2 className="text-3xl sm:text-4xl
              font-medium mb-5 leading-tight">
              Find your style.
              <br />
              Make it yours.
            </h2>

            <p className="text-gray-400 text-sm
              max-w-lg mx-auto leading-7">
              Explore collections that bring together
              timeless style, everyday comfort, and
              effortless confidence.
            </p>

          </div>
        </div>

      </section>

      {/* NEWSLETTER */}
      <div className="pb-10">
        <NewsletterBox />
      </div>

    </div>
  );
};

export default About;
