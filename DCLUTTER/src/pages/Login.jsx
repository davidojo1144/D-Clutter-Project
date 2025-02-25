import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = currentState === "Login"
      ? "https://reqres.in/api/login"
      : "https://reqres.in/api/register";

    const payload = currentState === "Login"
      ? { email, password }
      : { email, password, firstName, lastName, phoneNumber };

    try {
      const response = await axios.post(url, payload);
      setMessage(
        `${currentState === "Login" ? "Login" : "Signup"} successful! Token: ${
          response.data.token
        }`
      );
    } catch (error) {
      setMessage(error.response?.data?.error || `${currentState === "Login" ? "Login" : "Signup"} failed`);
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
          onChange={(e) => setFirstName(e.target.value)}
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
            onChange={(e) => setLastName(e.target.value)}
            required
          />
            )
        }
        
        <input
        type="email"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        {
          currentState === "Login" ? (
          ""
        ) :
        (
         <input
         type="number"
         className='w-full px-3 py-2 border border-gray-800'
         placeholder='Phone number'
         value={number}
         onChange={(e) => setNumber(e.target.value)}
         required
        />
        )
        }
       
        <input
        type="password"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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