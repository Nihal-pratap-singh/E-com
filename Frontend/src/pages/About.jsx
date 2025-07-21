import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p> — your one-stop destination for trendy, high-quality fashion and essentials. We deliver style, comfort, and value with every purchase, ensuring a seamless shopping experience.</p>
          <p>We are dedicated to providing top-quality products that blend style, comfort, and affordability.
            Our mission is to deliver a smooth and satisfying shopping experience, backed by fast delivery, secure payments, and exceptional customer support.</p>
          <b className='text-gray-800'>Our mission</b>
          <p>To empower every customer with a seamless, enjoyable shopping experience by offering high-quality products, exceptional value, and reliable service — all while staying ahead in style, innovation, and customer satisfaction.

          </p>
        </div>

      </div>

      <div className='text-3xl py-4'>
        <Title text1={'why'} text2={'Choose us'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Quality Assurance</b>
      <p className='text-gray-600' >We are committed to strict quality assurance, ensuring every product is carefully inspected, tested, and approved to meet the highest standards before it reaches your hands.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Convenience :</b>
      <p className='text-gray-600' >We prioritize your convenience with a user-friendly interface, secure checkout, and fast, hassle-free delivery right to your doorstep.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Exceptional customer Services </b>
      <p className='text-gray-600' >Our dedicated support team is always here to assist you with quick, friendly, and reliable service to ensure your satisfaction at every step.</p>
      </div>

      </div>
      <br  />
      <NewsletterBox/>
    </div>
  )
}

export default About