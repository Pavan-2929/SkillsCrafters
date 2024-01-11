import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/Auth";
import { Link } from "react-router-dom";

function AdminCustomers() {
  const [customers, setCustomers] = useState([]);
  const { AuthorizeToken } = useAuth();

  const getAllCustomers = async () => {
    try {
      const allCustomers = await axios.get(
        "http://localhost:3000/api/admin/services/customers",
        {
          headers: {
            Authorization: AuthorizeToken,
          },
        }
      );
      console.log(allCustomers);
      setCustomers(allCustomers.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCustomers();
  }, []);

  return (
    <div className="container mx-auto py-12 mb-6">
      <div className="overflow-x-auto ">
        <div className="mb-10 flex flex-col sm:block mt-5">
          <button
            type="submit"
            className="bg-purple-700 text-white p-2 mb-5 float-start hover:bg-purple-900 rounded"
          >
            <Link to="/admin/services">back</Link>
          </button>

          <h1 className="text-3xl">Customers List</h1>
        </div>
        <table className="min-w-full bg-[#313131] border border-gray-300">
          <thead>
            <tr className="bg-[#414141]">
              <th className="py-2 px-4">User-FirstName</th>
              <th className="py-2 px-4">User-LastName</th>
              <th className="py-2 px-4">User-Email</th>
              <th className="py-2 px-4">Service</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Provider</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="text-center border-t">
                <td className="py-2 px-4">{customer.firstName}</td>
                <td className="py-2 px-4">{customer.lastName}</td>
                <td className="py-2 px-4">{customer.email}</td>
                <td className="py-2 px-4">{customer.service}</td>
                <td className="py-2 px-4">{customer.price}</td>
                <td className="py-2 px-4">{customer.provider}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminCustomers;
