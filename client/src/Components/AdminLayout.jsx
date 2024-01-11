import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/Auth";
import AdminUsers from "../pages/Admin/AdminUsers";

function AdminLayout() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h1 className="text-2xl">Please wait...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen text-center text-[1.2rem]  text-white border-t-2">
      <nav className="bg-[#414141] p-4 font-bold border-gray-300 border mt-5">
        <div className="container mx-auto flex justify-around">
          <NavLink
            to="/admin/users"
            className="mr-4 hover:text-gray-300"
          >
            Users Data
          </NavLink>
          <NavLink
            to="/admin/contacts"
            className="mr-4 hover:text-gray-300"
          >
            Contacts Message
          </NavLink>
          <NavLink
            to="/admin/services"
            className="hover:text-gray-300"
          >
            Services
          </NavLink>
        </div>
      </nav>
      <div className=" ">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
