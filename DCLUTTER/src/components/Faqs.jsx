import React from 'react'
import { assets } from '../assets/assets'

const Faqs = () => {
  return (
    <>
      <div className='border bg-gray-100  pt-20 mt-20'>
        <div className='container items-center mb-10 md:ml-[25%] ml-[10%] space-y-7'>
            <h1 className='md:text-4xl text-xl font-bold'>FAQs ( That Also Bust Objections! )</h1>
            <div className='flex items-center '>
                <img className='w-7' src={assets.question} alt="" />
                <p className='md:text-xl text-sm font-semibold '>What's the question?</p>
            </div>
            <div className='border w-[60%] md:h-1 bg-gray-300'></div>
            <div className='flex items-center '>
                <img className='w-7' src={assets.question} alt="" />
                <p className='md:text-xl text-sm font-semibold '>What's the question?</p>
            </div>
            <div className='border w-[60%] md:h-1 bg-gray-300'></div>
            <div className='flex items-center '>
                <img className='w-7' src={assets.question} alt="" />
                <p className='md:text-xl text-sm font-semibold '>What's the question?</p>
            </div>
            <div className='border w-[60%] md:h-1 bg-gray-300'></div>
            <div className='flex items-center '>
                <img className='w-7' src={assets.question} alt="" />
                <p className='md:text-xl text-sm font-semibold '>What's the question?</p>
            </div>
            <div className='border w-[60%] md:h-1 bg-gray-300'></div>
            <div className='flex items-center '>
                <img className='w-7' src={assets.question} alt="" />
                <p className='md:text-xl text-sm font-semibold '>What's the question?</p>
            </div>
            <div className='border w-[60%] md:h-1 bg-gray-300'></div>
        </div>
      </div>
    </>
  )
}

export default Faqs
