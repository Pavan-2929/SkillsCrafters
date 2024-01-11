import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/Auth.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AdminUsersUpdate = () => {
  const { AuthorizeToken } = useAuth();
  const params = useParams();
  const URL = `https://skillscrafters-backend.onrender.com/api/admin/users/${params.id}`;

  const defaultFormData = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formData, setFormData] = useState(defaultFormData);

  const userData = async () => {
    try {
      const response = await axios.get(
        `https://skillscrafters-backend.onrender.com/api/admin/users/${params.id}`,
        {
          headers: {
            Authorization: AuthorizeToken,
          },
        }
      );
      console.log(response.data);
      setFormData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    userData();
  }, []);

const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.patch(
      `https://skillscrafters-backend.onrender.com/api/admin/users/update/${params.id}`,
      formData,
      {
        headers: {
          Authorization: AuthorizeToken,
        },
      }
    );

    if (response.status === 200) {
      toast.success("Update Successfully");
    } else {
      toast.error("Something went wrong");
    }

    console.log(response);
  } catch (error) {
    console.log(error);
    toast.error("Internal Server error")
  }
};


  return (
    <form
      onSubmit={handleUpdate}
      className="w-full lg:w-1/2 p-4 rounded-lg mt-4 font-semibold justify-center  "
    >
      <h1 className="sm:text-3xl text-2xl font-semibold mb-5 text-[#ccc] text-start">
        Update Profile
      </h1>

      <div className="my-4 text-start">
        <label htmlFor="firstName" className="text-purple-700">
          First Name
        </label>
        <input
          value={formData.firstName}
          type="text"
          id="firstName"
          onChange={handleChange}
          className="w-full p-2 border bg-[#414141] text-[#ccc] rounded-sm "
          placeholder="First Name"
        />
      </div>

      <div className="mb-4 text-start">
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

      <div className="mb-4 text-start">
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

      <div className="mb-16 float-start">
        <button type="submit" className="bg-purple-700 hover:bg-purple-900 rounded text-white p-2 mt-2">
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default AdminUsersUpdate;
