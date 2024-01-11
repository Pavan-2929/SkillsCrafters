import React, { useState } from "react";
import ServiceImage from "../assets/ServiceImage.png";
import { useAuth } from "../store/Auth";
import axios from "axios";
import { toast } from "react-toastify";

function Card({ serviceData }) {

  const {user} = useAuth();
  const [allInfo, setAllInfo] = useState(null)

  const handleUserData = async (service) => {
  
    try {
          const { isAdmin, ...userWithoutAdmin } = user;
          const { description, ...serviceWithoutDescription } = service;

          const combinedObj = {
            ...userWithoutAdmin,
            ...serviceWithoutDescription,
          };
          setAllInfo(combinedObj);
          const newCustomer = await axios.post(
            "http://localhost:3000/api/service/customer",
            allInfo
          );

          toast.success("Congratulation");
          console.log(newCustomer);
    } catch (error) {
      toast.error("Something went wrong")
    }
  }


  console.log(allInfo);
  return (
    <div className="flex flex-wrap sm:w-[75vw] w-full mx-auto">
      {serviceData.map((service, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 mb-10">
          <div className="flex flex-col h-full bg-[#414141] text-[#ccc] border border-purple-700 rounded-lg shadow-lg p-6">
            <img
              src={ServiceImage}
              alt=""
              className="w-full h-32 object-cover mb-4"
            />
            <p className="text-xl font-semibold mb-2">{service.service}</p>
            <p className="mb-4">{service.description}</p>
            <p className="mb-2">{service.provider}</p>
            <button onClick={() => handleUserData(service)} className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 focus:outline-none focus:shadow-outline-purple active:bg-purple-900">
              ${service.price}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
