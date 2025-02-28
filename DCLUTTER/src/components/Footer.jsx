import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()


  return (
    <>
      <div className='bg-gray-800 mt-[10%] '>
        <div className='container  text-white flex flex-col md:flex-row md:items-center md:justify-between '>
          <div className='pt-20 pb-20 space-y-5 text-sm'>
              <img className='w-28 animate-bounce rounded-full' src={assets.logo} alt="" />
              <p>At Declutter.
                <br/>Your Trusted Marketplace for Seamless Transactions
                At Declutter. <br/>We connect buyers and sellers with a platform built on trust, 
                <br/>efficiency, and innovation. 
                <br/>Whether you're looking to sell your items or find the best deals, 
                <br/>we make every transaction simple, secure, and satisfying.
                <br/>Explore our wide range of products and services, 
                <br/>and experience a new standard in buying and selling.
                <br/>Join us today and redefine the way you trade.</p>
          </div>
          <div className='space-y-5 text-start'>
            <p className='text-xl prata-regular font-semibold'>Quick Links</p>
            <div className='bg-gray-700 border w-32 md:w-36'></div>
            <ul className='space-y-3 text-sm'>
              <li className='cursor-pointer hover:text-gray-300' onClick={()=> navigate("/")}>Home</li>
              <li className='cursor-pointer hover:text-gray-300' onClick={()=> navigate("/about")}>About Us</li>
              <li className='cursor-pointer hover:text-gray-300' onClick={()=> navigate("/sell")}>Sell With Us</li>
              <li className='cursor-pointer hover:text-gray-300' onClick={()=> navigate("/contactus")}>Contact Us</li>
              <li className='cursor-pointer hover:text-gray-300' onClick={()=> navigate("#")}>How it Works</li>
            </ul>
          </div>
          <div className='items-center justify-start space-y-7 md:pt-0 pt-20'>
            <p className='text-xl prata-regular font-semibold'>Follow Us</p>
            <div className='bg-gray-700 border w-32 md:w-36 '></div>
            <div className='w-10 space-y-5'>
              <div className='bg-white rounded hover:bg-gray-400 cursor-pointer '>
                <img  src={assets.facebook} alt=""  />
              </div>
              <div className='bg-white rounded hover:bg-gray-400 cursor-pointer'>
                <img  src={assets.instagram} alt="" />
              </div>
              <div className='bg-white rounded hover:bg-gray-400 cursor-pointer'>
                <img  src={assets.twitter} alt="" />
              </div>
            </div>
          </div>
        </div>
        <p className='container text-white md:text-xl text-sm md:text-center pb-5 pt-10 md:pt-0 '>© 2025 D Clutter & Co. All rights reserved.
        <br/>Terms of Service | Privacy Policy.</p>
      </div>
    </>
  )
}

export default Footer
