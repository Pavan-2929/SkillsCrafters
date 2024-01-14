import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/Auth";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoggedIn, isLoading, user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
              <NavLink to="/service" onClick={closeMenu}>
                Service
              </NavLink>
            </li>
            <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>

            {isLoggedIn ? (
              <>
                {isLoggedIn && user && user.isAdmin ? (
                  <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
                    <NavLink to="/admin/users" onClick={closeMenu}>
                      Admin Access
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
                <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
                  <NavLink to="/logout" onClick={closeMenu}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
                  <NavLink to="/register" onClick={closeMenu}>
                    Register
                  </NavLink>
                </li>
                <li className="md:ml-5 xl:mx-5 hover:text-purple-700">
                  <NavLink to="/login" onClick={closeMenu}>
                    Login
                  </NavLink>
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
