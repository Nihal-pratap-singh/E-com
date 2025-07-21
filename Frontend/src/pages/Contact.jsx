import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 border-t'>
    <Title text1={'Contact'} text2={'Us'}/> 
    </div>
    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
    <img  className='w-full md:max-w-[480px]' src={assets.contact_img}/>
    <div className='flex flex-col justify-center items-start gap-6'>
    <p className='font-semibold text-xl text-gray-600'>Our store</p>
    <p className='text-gray-500'>57076 los anglies <br/> suite 350 , washingtoone ,USA</p>
    <p className=' text-gray-500'> Tel (415) 55-0086255 <br/> Email: neverforgent00@gmail.com</p>
    <p className='font-semibold text-xl text-gray-600'>Careers at forerver </p>
    <p className='text-gray-500'> Learn more about our team and Job opeanings</p>
    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
    <p></p>
    <p></p>

    </div>

    </div>
    <NewsletterBox/>
    </div>
  )
}

export default Contact