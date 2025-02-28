import React from 'react'
import Title from './Title'
import { assets, socialProof } from '../assets/assets'


const SocialProof = () => {
  return (
    <>
    <div className='container pb-10 mt-[7%]'>
        <div className='text-3xl text-center  md:pt-10 pt-20  '>
            <Title text1={"Social"}  text2={"Proof"} />
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between pt-7 gap-10'>
            {
              socialProof.map((proof)=> (
                <div className='md:space-y-5 '  key={proof.id}>
                  <p className='md:text-xl text-sm '>{proof.comment}</p>
                  <div className='flex md:gap-2 items-center '>
                    <img className='w-20 h-20 rounded' src={proof.image} alt="" />
                    <div>
                      <p>{proof.name}</p>
                      <img className='w-20' src={assets.rating} alt="" />
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
    </div>
    </>
  )
}

export default SocialProof
