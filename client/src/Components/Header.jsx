import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../store/Auth";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home')

  const {isLoggedIn} = useAuth();
  
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

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
            <li
              className={`md:ml-5 xl:mx-5 sm:mt-0 mt-10 hover:text-purple-700 ${
                activeLink === "Home" && "text-purple-700"
              }`}
            >
              <Link to="/" onClick={() => handleLinkClick("Home")}>
                Home
              </Link>
            </li>
            <li
              className={`md:ml-5 xl:mx-5 hover:text-purple-700 ${
                activeLink === "About" && "text-purple-700"
              }`}
            >
              <Link to="/about" onClick={() => handleLinkClick("About")}>
                About
              </Link>
            </li>
            <li
              className={`md:ml-5 xl:mx-5 hover:text-purple-700 ${
                activeLink === "Service" && "text-purple-700"
              }`}
            >
              <Link to="/service" onClick={() => handleLinkClick("Service")}>
                Service
              </Link>
            </li>
            <li
              className={`md:ml-5 xl:mx-5 hover:text-purple-700 ${
                activeLink === "Contact" && "text-purple-700"
              }`}
            >
              <Link to="/contact" onClick={() => handleLinkClick("Contact")}>
                Contact
              </Link>
            </li>
            {isLoggedIn ? (
              <li
                className={`md:ml-5 xl:mx-5 hover:text-purple-700 ${
                  activeLink === "Logout" && "text-purple-700"
                }`}
              >
                <Link to="/logout" onClick={() => handleLinkClick("Logout")}>
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li
                  className={`md:ml-5 xl:mx-5 hover:text-purple-700 ${
                    activeLink === "Register" && "text-purple-700"
                  }`}
                >
                  <Link
                    to="/register"
                    onClick={() => handleLinkClick("Register")}
                  >
                    Register
                  </Link>
                </li>
                <li
                  className={`md:ml-5 xl:mx-5 hover:text-purple-700 ${
                    activeLink === "Login" && "text-purple-700"
                  }`}
                >
                  <Link to="/login" onClick={() => handleLinkClick("Login")}>
                    Login
                  </Link>
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
