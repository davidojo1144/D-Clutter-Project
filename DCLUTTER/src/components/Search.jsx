import React from 'react'
import { assets } from '../assets/assets'

const Search = () => {
  return (
    <>
      <div>
        <div className='flex relative justify-center p-5 mb-20 items-center space-x-3'>
          <img className='absolute mr-52  md:mr-[32%] h-5 w-5 ' src={assets.search_icon} alt="" />
          <input className='md:w-[40%]  pl-14  pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' type="text" placeholder='Search for Product...' name="" id="" />
        </div>
      </div>
    </>
  )
}

export default Search
