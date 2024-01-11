import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../store/Auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const { AuthorizeToken } = useAuth();
  const [allContactsData, setAllContactsData] = useState([]);

  const getAllContactsData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/admin/contacts",
        {
          headers: {
            Authorization: AuthorizeToken,
          },
        }
      );
      setAllContactsData(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/admin/contacts/delete/${id}`,
        {
          headers: {
            Authorization: AuthorizeToken,
          },
        }
      );
      getAllContactsData();
      console.log(response);
      toast.success("Contacts Information deleted");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllContactsData();
  }, []);

  return (
    <div className="container mx-auto py-12 mb-6">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#313131] border-gray-300">
          <thead>
            <tr className="bg-[#414141]">
              <th className="py-2 px-4">First Name</th>
              <th className="py-2 px-4">Last Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Message</th>
              <th className="py-2 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {allContactsData.map((user, index) => (
              <tr key={index} className="text-center border-t">
                <td className="py-2 px-4">{user.firstName}</td>
                <td className="py-2 px-4">{user.lastName}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.message}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => deleteContact(user._id)}
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

export default AdminContacts;
