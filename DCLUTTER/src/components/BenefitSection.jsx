import React from 'react'
import { assets } from '../assets/assets'

const BenefitSection = () => {
  return (
    <>
    <div className='container flex flex-col gap-5 md:flex-row items-center justify-center pt-10 '>
        <div className='flex items-center justify-center flex-col'>
            <img className='w-[40%] animate-bounce' src={assets.support} alt="" />
            <h1 className='md:text-2xl font-bold text-xl text-gray-700 '>Benefit 1</h1>
            <p className='md:text-xl font-medium text-sm'>Customer Service: <span className='text-sm text-gray-600'>Our friendly team is here to help you every step of the way.</span></p>
        </div>
        <div className='flex items-center justify-center flex-col'>
            <img className='w-[40%] gap-6 animate-bounce' src={assets.quality} alt="" />
            <h1 className='md:text-2xl font-bold text-xl text-gray-700 '>Benefit 2</h1>
            <p className='md:text-xl font-medium text-sm'>Quality: <span className='text-sm text-gray-600'>We handpick each item to ensure you receive only the best.</span></p>
        </div>
        <div className='flex items-center justify-center flex-col'>
            <img className='w-[35%] animate-bounce' src={assets.paper_flight} alt="" />
            <h1 className='md:text-2xl font-bold text-xl text-gray-700 '>Benefit 3</h1>
            <p className='md:text-xl font-medium text-sm'>Convenience: <span className='text-sm text-gray-600'>Shop anytime, anywhere with our user-friendly online store.</span></p>
        </div>
    </div>
      
    </>
  )
}

export default BenefitSection
