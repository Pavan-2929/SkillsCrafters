import React, { useState } from "react";
import RegisterImage from "../assets/RegisterImage.png";
import axios from "axios";
import { useAuth } from "../store/Auth";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3000/api/auth/login";

const Login = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate()
  const {storeTokenInLS} = useAuth()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

const handleLoginChange = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", formData)

    console.log(response);

    if(response.status === 200){
      navigate('/')
      setFormData('')
      alert("Login success")
      storeTokenInLS(response.data.token)
    }
    else{
      alert("Login failed. Please try again")
    }
  } catch (error) {
    console.log(error)
    
    if(error.response){
      alert(` ${error.response.data.message}`)
    }
    else{
      alert("Internal Server error")
    }
  }
};


  return (
    <div className="flex justify-around mt-8">
      <div className="hidden lg:flex items-center">
        <img src={RegisterImage} alt="Register" className="w-[25rem] h-auto" />
      </div>

      <form
        onSubmit={handleLoginChange}
        className="w-full lg:w-1/2 p-4 rounded-lg mt-4 font-semibold"
      >
        <h1 className="sm:text-5xl text-3xl font-bold mb-10 text-[#ccc]">
          Login with your account
        </h1>

        <div className="mb-4">
          <label htmlFor="email" className="text-purple-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            className="w-full p-2 border bg-[#414141] text-[#ccc] focus:bg-none rounded-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="text-purple-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            className="w-full p-2 border bg-[#414141] text-[#ccc] rounded-sm"
          />
        </div>

        <div>
          <button type="submit" className="bg-purple-700 text-white p-2 mt-5">
            Login Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
