import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/Auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AdminUsers = () => {
  const { AuthorizeToken } = useAuth();
  const [users, setUsers] = useState([]);

  const getAllUserData = async () => {
    try {
      const allUsers = await axios.get(
        "http://localhost:3000/api/admin/users",
        {
          headers: {
            Authorization: AuthorizeToken,
          },
        }
      );
      setUsers(allUsers.data);
    } catch (error) {
      console.log("You got an error:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/admin/users/delete/${id}`,
        {
          headers: {
            Authorization: AuthorizeToken,
          },
        }
      );
      getAllUserData();
      toast.success("User deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllUserData();
  }, [AuthorizeToken]);

  return (
    <div className="container mx-auto py-12 mb-6">
      <div className="overflow-x-auto ">
        <table className="min-w-full bg-[#313131] border border-gray-300">
          <thead>
            <tr className="bg-[#414141]">
              <th className="py-2 px-4">First Name</th>
              <th className="py-2 px-4">Last Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Edit</th>
              <th className="py-2 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="text-center border-t">
                <td className="py-2 px-4">{user.firstName}</td>
                <td className="py-2 px-4">{user.lastName}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">
                  <Link
                    to={`/admin/users/update/${user._id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Update
                  </Link>
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
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

export default AdminUsers;
