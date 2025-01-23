import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { ClutterContext } from '../context/ClutterContext'

const Hero = () => {

    const {user,rating,report} = useContext(ClutterContext)


  return (
    <>
      <div className='container flex flex-col md:flex-row md:items-center gap-8 border shadow border-gray-400'>
        <div className='space-y-4 md:py-0 py-4'>
            <h1 className='prata-regular md:text-5xl text-2xl'>Enjoy Affordable <br /><span className='prata-regular text-blue-500'>Valuables here</span></h1>
            <p>Shop All Kind Of Products</p>
            <div className='flex items-center gap-5'>
                <p className='text-xl font-medium'>{user} <br /><span className='text-sm text-blue-600'>Served</span></p>
                <p className='text-xl font-medium'>{rating} <br /><span className='text-sm text-blue-600'>5 Stars Review</span></p>
                <p className='text-xl font-medium'>{report} <br /><span className='text-sm text-blue-600'>Report Effective</span></p>
            </div>
        </div>
        <div>
            <img className=' rounded pl-2' src={assets.hero_icon} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
