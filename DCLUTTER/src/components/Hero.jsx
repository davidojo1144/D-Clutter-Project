import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { ClutterContext } from '../context/ClutterContext'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const {user,rating,report} = useContext(ClutterContext)
    const navigate = useNavigate()

  return (
    <>
      <div className='container flex flex-col md:flex-row md:items-center justify-between gap-2 md:py-10 py-1'>
        <div className='space-y-4 md:py-0 py-2'>
            <h1 className='prata-regular md:text-5xl text-3xl'>Enjoy Affordable <br /><span className='prata-regular text-blue-600'>Valuables here</span></h1>
            <p className='text-sm'>Shop All Kind Of Products</p>
            <div className='flex items-center gap-5'>
                <p className='text-xl font-bold'>{user} <br /><span className='text-sm text-blue-600 font-medium'>Served</span></p>
                <p className='text-xl font-bold'>{rating} <br /><span className='text-sm text-blue-600 font-medium'>5 Stars Review</span></p>
                <p className='text-xl font-bold'>{report} <br /><span className='text-sm text-blue-600 font-medium'>Report Effective</span></p>
            </div>
            <button onClick={()=> navigate("/offer")} className='md:text-xl text-sm text-blue-500
                     hover:text-white md:font-semibold font-medium py-1 md:px-5 px-3
                     rounded-2xl hover:bg-blue-600
                    duration-200 border-2 border-blue-500 shadow'>Unlock Your Offer</button>
        </div>
        <div>
            <img className=' rounded pl-2' src={assets.hero_icon} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
