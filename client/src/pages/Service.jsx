import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useAuth } from "../store/Auth";

function Service() {
  const { user, AuthorizeToken } = useAuth();
  const [serviceData, setServiceData] = useState([]);

  const fetchServiceData = async () => {
    const response = await axios.get("https://skillscrafters-backend.onrender.com/api/service");
    setServiceData(response.data);
  };

  useEffect(() => {
    fetchServiceData();
  }, []);

  if (!user) {
    return (
      <h2 className="text-center text-2xl text-red-500 mt-4">
        You need to Register/Login first
      </h2>
    );
  }

  return (
    <div className="pt-10  border-t-2">
      <div className="text-center text-3xl font-bold mb-8">
        Explore the Best Courses Around the World
      </div>
      <Card serviceData={serviceData} />
    </div>
  );
}

export default Service;
