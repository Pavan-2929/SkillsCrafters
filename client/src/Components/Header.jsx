import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/Auth";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoggedIn } = useAuth();
  const { isLoading, user} = useAuth()

    if (isLoading) {
      return <h1 className="text-2xl">Please wait...</h1>;
    }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${isMenuOpen ? "bg-[#414141]" : ""} p-4 font-semibold`}>
      <div className="md:flex justify-around items-center">
        <div className="text-[2rem] flex justify-around items-center relative">
          <span className="text-purple-500 animate-fire">SkillsCrafters</span>
          <div onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <div>
          <ul
            className={`text-[1.3rem] md:flex ${
              isMenuOpen ? "block" : "hidden"
            } space-y-8 md:space-y-0 items-center flex flex-col md:flex-row justify-center `}
          >
            <li className="md:ml-5 xl:mx-5 sm:mt-0 mt-10 hover:text-purple-700">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
              <NavLink to="/service">Service</NavLink>
            </li>
            <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {isLoggedIn ? (
              <>
                {isLoggedIn && user && user.isAdmin ? (
                  <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
                    <NavLink to="/admin/users">Admin Access</NavLink>
                  </li>
                ) : (
                  ""
                )}
                <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
