import React, { useContext, useState } from "react";
import { ClutterContext } from "../context/ClutterContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";




const Sell = () => {
  const {currency} = useContext(ClutterContext)
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemImage, setItemImage] = useState(null);
  const navigate = useNavigate()
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token")
    if (!token) {
      toast.error("You must be logged in to list an item")
      setTimeout(()=>{
        navigate("/login")
      },4000)
      return
   }
    

    if (!itemName || !itemDescription || !itemPrice || !itemCategory || !itemImage) {
      toast.error("Please fill out all fields.");
      return;
    }

    
    const formData = new FormData();
    formData.append("itemName", itemName);
    formData.append("itemDescription", itemDescription);
    formData.append("itemPrice", itemPrice);
    formData.append("itemCategory", itemCategory);
    formData.append("itemImage", itemImage);

    
    try {
      const response = await axios.post("https://your-backend-api.com/list-item", 
        formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      });
      console.log("Success!: ", response.data);
      toast.success("Item listed successfully!");

      setItemName("");
      setItemDescription("");
      setItemPrice("");
      setItemCategory("");
      setItemImage(null);
      
    } 
    catch (error) {
      console.log("Error: ", error)
      toast.error("Failed to list item. Please try again.");
    }

    };

  return (
    <div className="container ">
    <div>
      <div>
        <h1 className="text-center text-black md:text-3xl prata-regular">Sell Your Items with Ease!</h1>
        <p className="md:text-xl text-gray-700 pt-5 text-sm text-center">Welcome to D Clutter, your go-to platform for selling items quickly and securely. Whether you're decluttering your home, upgrading your gadgets, or simply looking to make some extra cash, we’ve got you covered. Listing your item is fast, easy, and completely free!</p>
      </div>
    <div className=" flex items-center justify-center p-4 md:p-8">
      <div className="container bg-gray-300 p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="md:text-2xl text-xl font-semibold text-center mb-6">Sell Your Item</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="itemName" className="block text-sm font-medium text-black">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Enter item name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          
          <div>
            <label htmlFor="itemDescription" className="block text-sm font-medium text-black">
              Description
            </label>
            <textarea
              id="itemDescription"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              placeholder="Describe your item"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="itemPrice" className="block text-sm font-medium text-black">
              Price  {currency} 
            </label>
            <input
              type="number"
              id="itemPrice"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              placeholder="Enter price"
              step="0.01"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="itemCategory" className="block text-sm font-medium text-black">
              Category
            </label>
            <select
              id="itemCategory"
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="furniture">Furniture</option>
              <option value="books">Books</option>
              <option value="books">Vehincles</option>
              <option value="other">Other</option>
            </select>
          </div>

        
          <div>
            <label htmlFor="itemImage" className="block text-sm font-medium text-black">
              Upload Image
            </label>
            <input
              type="file"
              id="itemImage"
              onChange={(e) => setItemImage(e.target.files[0])}
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            List Item for Sale
          </button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Sell;