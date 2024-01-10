import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

function Service() {
  const [serviceData, setServiceData] = useState([]);

  const fetchServiceData = async () => {
    const response = await axios.get("http://localhost:3000/api/service");
    setServiceData(response.data);
  };
  console.log(serviceData);

  useEffect(() => {
    fetchServiceData();
  }, []);
  
  return (
    <div>
      <Card serviceData={serviceData}/>
    </div>
  );
}

export default Service;
