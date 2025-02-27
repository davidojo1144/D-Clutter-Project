import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up"); // Toggle between Sign Up and Login
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Toggle between Sign Up and Login
  const toggleState = () => {
    setCurrentState(currentState === "Sign Up" ? "Login" : "Sign Up");
    setMessage(""); // Clear any previous messages
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      let response;
      if (currentState === "Sign Up") {
        // Sign Up API call
        response = await axios.post("http://172.16.0.179:8080/User/sign_up/", {
          firstName,
          lastName,
          email,
          contact,
          password,
        });
      } else {
        // Login API call
        response = await axios.post("http://172.16.0.179:8080/User/login/", {
          email,
          password,
        });
      }

      // Handle successful response
      setMessage(response.data.message);
      console.log("Response:", response.data);

      // Store token in localStorage for Login
      if (currentState === "Login" && response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert("Login successful!");
      }
    } catch (err) {
      // Handle errors
      setMessage(err.response?.data?.message || "An error occurred.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };


 

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
    >
      <div className='inline-flex items-center gap-4 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {
        currentState === 'Login' ? (
        ""
      ) : (
        <input
          type="text"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='First name'
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        )}
        {
          currentState === 'Login' ? (
            ""
          ) 
            :
            (
            <input
            type="text"
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Last name'
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
            )
        }
        
        <input
        type="email"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        />
        {
          currentState === "Login" ? (
          ""
        ) :
        (
         <input
         type=""
         className='w-full px-3 py-2 border border-gray-800'
         placeholder='Phone number'
         value={contact}
         onChange={(event) => setContact(event.target.value)}
         required
        />
        )
        }
       
        <input
        type="password"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot your password ?</p>
          {currentState === "Login" ? (
            <p onClick={() => setCurrentState("Sign Up")} className='cursor-pointer'>
              Create Account
            </p>
          ) : (
            <p onClick={() => setCurrentState("Login")} className='cursor-pointer'>
              Login Here
            </p>
          )}
        </div>
        <button
          type="submit"
          className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 mt-4 font-light rounded'
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
        {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
    </form>
  );
};

export default Login;