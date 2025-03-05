import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation()

  // Update currentState to "Logged In" when isLoggedIn is true
  useEffect(() => {
    if (isLoggedIn) {
      setCurrentState("Logged In");
    }
  }, [isLoggedIn]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prevent sign-up/login if user is already logged in
    if (isLoggedIn) {
      toast.info("You are already logged in.");
      return;
    }

    try {
      let response;
      if (currentState === "Sign Up") {
        response = await axios.post("/api/User/sign_up/", {
          firstName,
          lastName,
          password,
          email,
          contact,
        });

        // Handle successful sign-up
        setMessage(response.data.message);
        console.log("Sign Up successful:", response.data);
        toast.success("Sign Up successful! Please log in.");

        // Clear form fields after successful sign-up
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setPassword("");

        // Switch to the login form
        setCurrentState("Login");
      } else {
        response = await axios.post("/api/User/login/", {
          email,
          password,
        });

        // Handle successful login
        setMessage(response.data.message);
        console.log("Login successful:", response.data);
        toast.success("Login successful!");

        // Save token to localStorage and update authentication state
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setIsLoggedIn(true);
        }

        setTimeout(() => {
            const searchParams = new URLSearchParams(location.search);
            const redirectPath = searchParams.get('redirect') || '/'; 
        }, 2000);
        
      }
    } catch (err) {
      // Handle errors
      console.error(`${currentState} error:`, err.response?.data || err.message);

      // Display specific error message for email already in use
      if (err.response?.data?.message?.includes("email")) {
        setMessage("Email is already in use.");
        toast.error("Email is already in use.");
      } else {
        setMessage(err.response?.data?.message || "An error occurred.");
        toast.error(`${currentState} failed, please try again!`);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update authentication state
    setCurrentState("Login"); // Reset currentState to "Login" after logout
    navigate("/login"); // Redirect to login page
  };

  return (
    <form
      onSubmit={!isLoggedIn ? handleSubmit : undefined}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
    >
      <div className='inline-flex items-center gap-4 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {isLoggedIn ? (
        <>
          <p className="text-center">You are already logged in.</p>
          <button
            onClick={handleLogout}
            className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 mt-4 font-light rounded'
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          {currentState === 'Login' ? null : (
            <>
              <input
                type="text"
                className='w-full px-3 py-2 border border-gray-800'
                placeholder='First name'
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
              <input
                type="text"
                className='w-full px-3 py-2 border border-gray-800'
                placeholder='Last name'
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </>
          )}

          <input
            type="email"
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          {currentState === "Login" ? null : (
            <input
              type="tel"
              className='w-full px-3 py-2 border border-gray-800'
              placeholder='Phone number'
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              required
            />
          )}

          <input
            type="password"
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <div className='w-full flex justify-between text-sm mt-[-8px]'>
            <p className='cursor-pointer hover:text-gray-500'>Forgot your password?</p>
            {currentState === "Login" ? (
              <p onClick={() => setCurrentState("Sign Up")} className='cursor-pointer hover:text-gray-500'>
                Create Account
              </p>
            ) : (
              <p onClick={() => setCurrentState("Login")} className='cursor-pointer hover:text-gray-500'>
                Login Here
              </p>
            )}
          </div>

          <button
            type="submit"
            className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 mt-4 font-light rounded'
            disabled={isLoggedIn} 
          >
            {currentState === "Login" ? "Log In" : "Sign Up"}
          </button>
        </>
      )}

      {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
    </form>
  );
};

export default Login;