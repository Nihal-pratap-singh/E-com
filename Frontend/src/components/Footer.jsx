import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32 ' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vel facere suscipit voluptate error aliquam, vitae consequuntur provident facilis ex!
                    </p>
                </div>
                <div>
                <p className='text-xl font-medium mb-5'>company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Develry</li>
                    <li>Privacy policy</li>
                </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Get in touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-9083574973940</li>
                    <li>neverforgent00@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>Copywrite handle on nihal sing </p>
            </div>
        </div>
    )
}

export default Footer