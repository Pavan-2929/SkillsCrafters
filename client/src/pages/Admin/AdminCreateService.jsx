import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/Auth";
import { toast } from "react-toastify";

const AdminCreateService = () => {
    const defaultFormData = {
      service: "",
      description: "",
      price: "",
      provider: "",
    };
    const navigate = useNavigate()
  const [formData, setFormData] = useState(defaultFormData);

  const { AuthorizeToken } = useAuth();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleCreateService = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/services/create",
        formData,
        {
          headers: {
            Authorization: AuthorizeToken,
          },
        }
      );

      toast.success("Service created Successfully");
      navigate('/admin/services')
    } catch (error) {
        toast.error("Something went wrong")
    }
  };
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleCreateService}
        className="w-full lg:w-1/2 p-4 rounded-lg font-semibold"
      >
        <div className="mb-10 flex flex-col sm:block">
          <button
            type="submit"
            className="bg-purple-700 text-white p-2 mb-5 float-start hover:bg-purple-900 rounded"
          >
            <Link to="/admin/services">back</Link>
          </button>

          <h1 className="text-3xl">Create new Service</h1>
        </div>
        <div className="mb-4 text-start">
          <label htmlFor="email" className="text-purple-700">
            Service Name
          </label>
          <input
            type="text"
            id="service"
            onChange={handleChange}
            className="w-full p-2 border bg-[#414141] text-[#ccc] focus:bg-none rounded-sm"
          />
        </div>

        <div className="mb-4 text-start">
          <label htmlFor="password" className="text-purple-700">
            Desciption
          </label>
          <input
            type="text"
            id="description"
            onChange={handleChange}
            className="w-full p-2 border bg-[#414141] text-[#ccc] rounded-sm"
          />
        </div>
        <div className="mb-4 text-start">
          <label htmlFor="password" className="text-purple-700 ">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            onChange={handleChange}
            className="w-full p-2 border bg-[#414141] text-[#ccc] rounded-sm"
          />
        </div>
        <div className=" text-start">
          <label htmlFor="password" className="text-purple-700 ">
            Provider
          </label>
          <input
            type="text"
            id="provider"
            onChange={handleChange}
            className="w-full p-2 border bg-[#414141] text-[#ccc] rounded-sm"
          />
        </div>

        <div className=" float-start">
          <button
            type="submit"
            className="bg-purple-700 text-white p-2 mt-5 hover:bg-purple-900 rounded sm:mb-0 mb-16"
          >
            Create now
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminCreateService;
