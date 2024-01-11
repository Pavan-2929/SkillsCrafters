import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

function Service() {
  const [serviceData, setServiceData] = useState([]);

  const fetchServiceData = async () => {
    const response = await axios.get("http://localhost:3000/api/service");
    setServiceData(response.data);
  };

  useEffect(() => {
    fetchServiceData();
  }, []);
  
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
