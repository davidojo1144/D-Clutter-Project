import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import ResponsiveNav from './ResponsiveNav';
import { Link, NavLink, useNavigate} from 'react-router-dom';



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const [logs, setLogs] = useState("Login");
  const token = localStorage.getItem("token");

  
  // useEffect(() => {
  //   token ? 
  //   console.log("Token exists: ", token) : 
  //   console.log("Token doesn't exist");
  // }, [token]);

  
  useEffect(() => {
    if (token) {
      setLogs("Log out"); 
    } else {
      setLogs("Login"); 
    }
  }, [token]); 

  
  
  
  return (
    <>
      <nav>
        <div className='container flex items-center justify-between py-8'>
          {/* Logo section */}
          <div className='flex items-center text-2xl font-bold gap-2 uppercase'>
            <Link to="/">
              <img className='rounded-full md:w-20 w-10 animate-bounce' src={assets.logo} alt="" />
            </Link>
            <p className='md:text-xl text-sm'>D <span className='text-blue-500 md:text-xl text-sm'>Clutter</span></p>
          </div>

          {/* Menu section */}
          <div className='hidden md:block'>
            <ul className='flex gap-5 text-center'>
              <NavLink to="/buy"><li className='text-xl font-medium hover:text-blue-400'>Buy</li></NavLink>
              <NavLink to="/sell"><li className='text-xl font-medium hover:text-blue-400'>Sell</li></NavLink>
              <NavLink to="/about"><li className='text-xl font-medium hover:text-blue-400'>About</li></NavLink>
              <NavLink to="/contactus"><li className='text-xl font-medium hover:text-blue-400'>Contact Us</li></NavLink>
            </ul>
          </div>

          {/* Icon section */}
          <div className='flex items-center justify-center md:gap-4 gap-1'>
            <NavLink to="/cart">
              <img width="35px" src={assets.cart_icon} alt="" />
            </NavLink>
            <button
              onClick={()=> navigate("/login")}
              className='text-xl text-blue-500 hover:text-white font-medium py-1 px-5 rounded-2xl hover:bg-blue-600 md:block hidden duration-200 border-2 border-blue-500 shadow'
            >
              {logs} 
            </button>
          </div>

          {/* Mobile menu section */}
          <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
            <img width="25px" src={`${open ? assets.cancel_icon : assets.menu}`} alt="" />
          </div>
        </div>
      </nav>

      {/* Mobile sidebar section */}
      <ResponsiveNav open={open} />
    </>
  );
};

export default Navbar;