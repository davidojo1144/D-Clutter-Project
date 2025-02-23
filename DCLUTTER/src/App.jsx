import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
import Search from './components/Search'
import About from './pages/About'
import Offer from './pages/Offer'


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/buy" element={<Buy/>} />
          <Route path="/sell" element={<Sell/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="allproducts" element={<AllProducts/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/order" element={<Orders/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/offer" element={<Offer/>} />
        </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
