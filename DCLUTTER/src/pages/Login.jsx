import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [email, setEmail] = useState("");
// const [contact, setContact] = useState("");
// const [password, setPassword] = useState("");
// const [message, setMessage] = useState("");
// const [loading, setLoading] = useState(false);





// const handleSubmit = async (event) => {
//   event.preventDefault(); 

//   setLoading(true);
//   setMessage("");

//   try {
//     const response = await axios.post("http://dclutter-production-52ee.up.railway.app:8080/User/sign_up/", {
//       firstName,
//       lastName,
//       password,
//       email,
//       contact
//     });


//     setMessage(response.data.message);
//     console.log("Sign Up successful:", response.data);
//     alert("Sign Up successful!");
//   } catch (err) {
  
//     setMessage(err.response?.data?.message || "An error occurred during signup.");
//     console.error("Sign Up error:", err);
//     alert("Sign Up error!");
//   } finally {
//     setLoading(false);
//   }
// };


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(false);

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // setLoading(true);
    // setMessage("");

    try {
      let response;
      if (currentState === "Sign Up") {
      
        response = await axios.post("http://dclutter-production-52ee.up.railway.app:8080/User/sign_up/", {
          firstName,
          lastName,
          password,
          email,
          contact,
        });
      } else {
        
        response = await axios.post("https://dclutter-production-52ee.up.railway.app/User/login/", {
          email,
          password,
        });
      }

      
      setMessage(response.data.message);
      console.log(`${currentState} successful:`, response.data);
      alert(`${currentState} successful!`);

      
      if (currentState === "Login" && response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
    } catch (err) {
      
      setMessage(err.response?.data?.message || "An error occurred.");
      console.error(`${currentState} error:`, err);
      alert(`${currentState} error!`);
    } 
    // finally {
    //   setLoading(false);
    // }
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
         type="tel"
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
          <p className='cursor-pointer hover:text-gray-500'>Forgot your password ?</p>
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
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
        {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
    </form>
  );
};

export default Login;