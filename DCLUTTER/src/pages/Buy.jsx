import axios from 'axios';
import React, { useContext } from 'react'
import { useEffect, useState } from "react";
import Title from '../components/Title';
import { ClutterContext } from '../context/ClutterContext';
import { useNavigate } from 'react-router-dom';



const Buy = () => {

  const {currency} = useContext(ClutterContext)
  const navigate = useNavigate()

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); // Axios stores the response data in `data`
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className='flex items-center justify-center text-lg'>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='container'>
      <div className='flex items-center justify-center text-xl font-bold pb-5'>
        <Title text1={"All"}  text2={"PRODUCTS"}  />
      </div>
      {
        products.map((product) => (
        <div key={product.id} className="grid grid-rows-1 md:grid-cols-3 gap-1 md:gap-10 p-6 md:p-10 bg-white shadow-2xl rounded-lg overflow-hidden" >
          <div>
            <img className="md:w-full md:h-48 h-40 overflow-hidden"  src={product.image} />
          </div>
          <div className='justify-center'>
            <h2 className='text-sm md:text-lg font-medium text-gray-500'><span className='md:text-xl text-gray-950'>Name:</span> {product.title}</h2>
            <p className='text-sm md:text-lg font-medium text-gray-500 '><span className='md:text-xl text-gray-950'>Price:</span>{currency} {product.price}</p>
            <p className='text-sm md:text-lg font-medium text-gray-500'><span className='md:text-xl text-gray-950'>Category:</span> {product.category}</p>
            <p className='text-sm md:text-lg font-medium text-gray-500'><span className='md:text-xl text-gray-950'>Rating:</span> {product.rating.rate} <span className='md:text-xl text-gray-950'>Count:</span>: {product.rating.count}</p>
            <p className='text-sm md:text-lg font-medium text-gray-500'><span className='md:text-xl text-gray-950'>Description:</span> {product.description}</p>
            <button onClick={()=> navigate("/cart")} className='bg-blue-500 text-white w-32 h-8 rounded'>Add To Cart</button>
          </div>
        </div>

      ))}
    </div>
  );
};


export default Buy
