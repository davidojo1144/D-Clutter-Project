import React, { useContext } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { ClutterContext } from '../context/ClutterContext'

const About = () => {

  const {successful,rate} = useContext(ClutterContext)
  
  return (
    <div>
      <div className='container'>
        <div>
          <div className=' text-center font-semibold text-xl md:text-3xl pt-10'>
            <Title text1={"ABOUT"} text2={"Us"} />
            <p className='md:text-xl text-xs text-gray-600 font-medium'>Connecting Buyers and Sellers, One Transaction at a Time.</p>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-center md:space-y-0 space-y-5 md:space-x-5 pt-20'>
            <img className='rounded-2xl' src={assets.about} alt="" />
            <p className='md:text-xl text-sm font-light'> Founded in 2025, <strong>D Clutter.</strong> started with a simple idea: to create a marketplace where buying and selling is easy, secure, and enjoyable. 
            What began as a small platform has grown into a trusted community of thousands of users, thanks to our commitment to innovation and customer satisfaction.</p>
          </div>
          <div className='text-center pt-20 '>
            <h2 className='text-xl md:font-semibold  md:text-3xl'>Our Mission</h2>
            <p className='md:text-xl text-sm font-light'>Our mission is to empower individuals and businesses by providing a seamless platform for buying and selling. 
            We believe in transparency, trust, and creating value for our users.</p>
          </div>
          <div className='md:mt-[10%] mt-[30%]' >
            <h2 className='text-xl md:text-3xl md:font-semibold  text-center'>Meet the Team</h2>
            <div className='flex flex-col md:flex-row space-y-10 pl-[35%] md:pl-[25%] items-center pt-5 md:pt-20'>
            <div className='md:space-y-5'>
              <img className='w-[40%] items-center justify-center rounded-full shadow-2xl' src={assets.ceo} />
              <h3 className='md:text-3xl text-sm pb-3 '>Ojo David</h3>
              <p className='md:text-xl text-xs'>CEO & Founder</p>
            </div>
            <div className='md:space-y-5' >
              <img className='w-[40%] items-center justify-center rounded-full shadow-2xl' src={assets.ceo2} />
              <h3 className='md:text-3xl text-sm pb-3 '>Taoreed Olawale</h3>
              <p className='md:text-xl text-xs'>Head of Operations & Co Founder</p>
            </div>
           </div>
        </div>
        <div className='text-center md:mt-[10%] mt-[30%]' >
          <h2 className=' md:text-3xl md:font-semibold  text-xl pb-5 md:pb-10'>Our Achievements</h2>
          <ul className='md:space-y-3 md:text-xl text-sm '>
            <li>{successful} successful transactions</li>
            <li>Rated {rate}  by our users</li>
            <li>Featured in <strong>Top Marketplace Awards 2024</strong></li>
          </ul>
        </div>
        <div className='text-center  md:text-xl text-sm md:mt-[10%] mt-[30%]'>
          <h2 className=' md:text-3xl md:font-semibold text-xl pb-5 md:pb-10'>Join Our Community</h2>
          <p>Ready to start buying or selling? Sign up today and experience the difference!</p>
          <a className='hover:text-gray-500' >Get Started</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
