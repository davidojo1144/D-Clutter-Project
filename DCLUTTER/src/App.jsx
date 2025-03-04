import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import Cart from './pages/Cart'
import Login from './pages/Login'
import AllProducts from './pages/AllProducts'
import Product from './pages/Product'
import ContactUs from './pages/ContactUs'
import Orders from './pages/Orders'
import About from './pages/About'
import Offer from './pages/Offer'


const App = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
    <div className='overflow-x-hidden'>
      <Navbar/>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Home/> </motion.div> } />
          <Route path="/buy" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Buy/> </motion.div> } />
          <Route path="/sell" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Sell/> </motion.div> } />
          <Route path="/cart" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Cart/> </motion.div> } />
          <Route path="/login" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Login/> </motion.div> } />
          <Route path="/allproducts" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <AllProducts/> </motion.div> } />
          <Route path="/product" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Product/> </motion.div> } />
          <Route path="/contactus" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <ContactUs/> </motion.div> } />
          <Route path="/order" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Orders/> </motion.div> } />
          <Route path="/about" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <About/> </motion.div> } />
          <Route path="/offer" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}> <Offer/> </motion.div> } />
        </Routes>
        <ToastContainer/>
      <Footer/>
    </div>
    </AnimatePresence>
  )
}

export default App
