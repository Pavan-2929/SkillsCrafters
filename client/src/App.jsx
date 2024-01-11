import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Logout from "./pages/Logout";
import AdminLayout from "./Components/AdminLayout";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminContacts from "./pages/Admin/AdminContacts";
import AdminServices from "./pages/Admin/AdminServices";
import AdminUpdate from "./pages/Admin/AdminUsersUpdate";
import AdminCreateService from "./pages/Admin/AdminCreateService";
import AdminCustomers from "./pages/Admin/AdminCustomers";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<AdminUsers/>} /> 
          <Route path="contacts" element={<AdminContacts/>} /> 
          <Route path="services" element={<AdminServices/>} /> 
          <Route path="users/update/:id" element={<AdminUpdate/>} />
          <Route path="services/create" element={<AdminCreateService/>} />
          <Route path="services/customers" element={<AdminCustomers/>} />
          <Route/> 
        </Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
