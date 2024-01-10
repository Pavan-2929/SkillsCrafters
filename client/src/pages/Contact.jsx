import React, { useEffect, useState } from "react";
import ContactImage from "../assets/ContactImage.png";
import { useAuth } from "../store/Auth";
import axios from "axios";

const Contact = () => {
  const URL = "http://localhost:3000/api/contact";
  const defaultContactData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(defaultContactData);

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        message: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleContactSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(URL, formData);
      console.log(response.data);
      alert("Thanx for contacting")
    } catch (error) {
      console.log(error); 
      alert("Something went wrong")
    }
  };

  return (
    <div className="flex justify-around ">
      <div className="hidden lg:flex items-center">
        <img src={ContactImage} alt="Register" className="w-[25rem] h-auto" />
      </div>

      <form
        onSubmit={handleContactSubmit}
        className="w-full lg:w-1/2 p-4 rounded-lg mt-1 font-semibold"
      >
        <h1 className="sm:text-5xl text-3xl font-bold mb-10 text-[#ccc]">
          Want to Contact with Us
        </h1>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="firstName" className="text-purple-700">
              First Name
            </label>
            <input
              value={formData.firstName}
              type="text"
              id="firstName"
              onChange={handleChange}
              className="w-full p-2 border bg-[#414141] text-[#ccc] rounded-sm"
              placeholder="First Name"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="lastName" className="text-purple-700">
              Last Name
            </label>
            <input
              value={formData.lastName}
              type="text"
              id="lastName"
              onChange={handleChange}
              className="w-full p-2 border bg-[#414141] text-[#ccc] rounded-sm"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-purple-700">
            Email
          </label>
          <input
            value={formData.email}
            type="email"
            id="email"
            onChange={handleChange}
            className="w-full p-2 border bg-[#414141] text-[#ccc] focus:bg-none rounded-sm"
            placeholder="Email Address"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="text-purple-700">
            Password
          </label>
          <textarea
            value={formData.message}
            id="message"
            rows="8"
            className="w-full p-2 border bg-[#414141] text-[#ccc] rounded-sm"
            placeholder="Enter your message/feedback"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-16">
          <button type="submit" className="bg-purple-700 text-white p-2 mt-2">
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
