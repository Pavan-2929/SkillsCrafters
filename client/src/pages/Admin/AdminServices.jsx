import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../store/Auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AdminServices = () => {
  const { AuthorizeToken } = useAuth();
  const [serviceData, setServiceData] = useState([]);

  const getAllServiceData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/admin/services",
        {
          headers: {
            Authorization: AuthorizeToken,
          },
        }
      );

      setServiceData(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error("Internal server error");
    }
  };

  const serviceDelete = async (id) => {
    try {
      const deletedService = await axios.delete(
        `http://localhost:3000/api/admin/services/delete/${id}`,{
          headers: {
            Authorization: AuthorizeToken
          }
        }
      );
      getAllServiceData()
      toast.success("Service deleted")
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error);
    }
  }


  useEffect(() => {
    getAllServiceData();
  }, []);

  return (
    <div className="container mx-auto py-8 mb-6">
      <div>
        <button
          type="submit"
          className="bg-purple-700 text-white p-2 mb-8 hover:bg-purple-900 rounded"

        >
          <Link to='/admin/services/create'>
          Add new Service
          </Link>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#313131] border border-gray-300">
          <thead>
            <tr className="bg-[#414141]">
              <th className="py-2 px-4">Service</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Price ($)</th>
              <th className="py-2 px-4">Provider</th>
              <th className="py-2 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {serviceData.map((service, index) => (
              <tr key={index} className="text-center border-t">
                <td className="py-2 px-4">{service.service}</td>
                <td className="py-2 px-4">{service.description}</td>
                <td className="py-2 px-4">{service.price}</td>
                <td className="py-2 px-4">{service.provider}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => serviceDelete(service._id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminServices;
