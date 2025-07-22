import React from "react";
import { Menu, X, Instagram, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { locations } from "../constants";
import { contacts } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    // navigation bar
    <nav className=" bg-[#16163F] sticky top-0 z-50 backdrop-blur-lg ">
      {/* nav content container 1  */}
      <div className="container1 mx-auto relative text-sm px-6 lg:px-20 lg:py-1">
        <div className="md:hidden flex flex-row justify-between items-center">
          <div className="socialHandles text-sm bg-indigo-950 flex flex-row py-2 space-x-2.5">
            <a href="#" className="active:text-orange-300">
              <Instagram />
            </a>
            <a href="#" className="active:text-orange-300">
              <Linkedin />
            </a>
            <a href="#" className="active:text-orange-300">
              <Facebook />
            </a>
          </div>

          <ul className="locations flex flex-row space-x-1.5">
            {locations.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="active:text-orange-300">
                  {item.label}
                </a>
                {index < locations.length - 1 && (
                  <span className="px-1">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* mid level switch  */}

        <div className="hidden md:flex flex-row-reverse justify-between items-center">
          <div className="socialHandles text-sm bg-inherit flex flex-row py-2 space-x-2.5">
            <a
              href="#"
              className="hover:text-orange-300 active:text-purple-300"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="hover:text-orange-300 active:text-purple-300"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              className="hover:text-orange-300 active:text-purple-300"
            >
              <Facebook />
            </a>
          </div>

          <ul className="flex flex-row space-x-4">
            {contacts.map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 hover:text-orange-300 active:text-purple-300"
              >
                <span>{item.icon}</span>
                <span>
                  <a href={item.href}>{item.contact}</a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* nav content container 2 */}
      <div className="container2 bg-white text-indigo-950 px-6 mx-auto relative text-sm lg:text-[17px] lg:py-2">
        {/* content items container  */}
        <div className=" flex justify-between gap-20 items-center">
          {/* name-logo  */}
          <div className=" flex items-center flex-shrink-0  ">
            <Link to="/"><img className="h-16 w-10 mr-2" src={logo} alt="logo" /></Link>
            <span className="text-lg tracking-tight font-sans font-semibold">
              ALLIANCE LAW FIRM
            </span>
          </div>

          {/* nav-list  */}
          <ul className="hidden md:text-md lg:flex mx-auto space-x-12 text-md font-semibold">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`hover:text-orange-500 ${
                  location.pathname === item.path
                    ? "text-orange-500 font-semibold"
                    : ""
                }`}
              >
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <X className="text-orange-500 active:text-indigo-950" />
              ) : (
                <Menu className="active:text-orange-500" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 my-0 z-20 bg-amber-50 text-black font-semibold text-[15px] w-full px-12 py-3 flex flex-col items-center lg:hidden animate-slideDown">
            <ul className="flex flex-col items-center">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`py-4 ${
                    location.pathname === item.path
                      ? "text-orange-500 font-semibold"
                      : "text-black"
                  }`}
                >
                  <Link
                    className="none md:hover:text-orange-300"
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
