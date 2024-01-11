import React, { useState } from "react";
import RegisterImage from "../assets/RegisterImage.png";
import axios from "axios";
import { useAuth } from "../store/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const URL = "http://localhost:3000/api/auth/register";

const Register = () => {

  const navigate = useNavigate()
  const { storeTokenInLS } = useAuth();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(URL, formData)

      if(response.status === 201){
      storeTokenInLS(response.data.token);
        toast.success("Registration Successfully")
        setFormData('')
        navigate('/')
      }
      else{
        toast.error("Something went wrong")
      }
    } catch (error) {
      if(error.message){
        toast.error(`${error.response.data.message}`)
      }
      else{
        toast.error('Internal Server error')
      }
    }

  };

  return (
    <div className="flex justify-around mt-8 ">
      <div className="hidden lg:flex items-center">
        <img src={RegisterImage} alt="Register" className="w-[25rem] h-auto" />
      </div>

      <form
        onSubmit={handleSubmitRegister}
        className="w-full lg:w-1/2 p-4 rounded-lg mt-4 font-semibold"
      >
        <h1 className="sm:text-5xl text-3xl font-bold mb-10 text-[#ccc]">
          Register with your account
        </h1>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="firstName" className="text-purple-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              onChange={handleChange}
              className="w-full p-2 border bg-[#414141] text-[#ccc] rounded-sm"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="lastName" className="text-purple-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              onChange={handleChange}
              className="w-full p-2 border bg-[#414141] text-[#ccc] rounded-sm"
            />
          </div>
        </div>

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

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="text-purple-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            onChange={handleChange}
            className="w-full p-2 border bg-[#414141] text-[#ccc] rounded-sm"
          />
        </div>

        <div className="mb-16">
          <button
            type="submit"
            className="bg-purple-700 text-white p-2 mt-5 hover:bg-purple-900 rounded"
          >
Register Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
