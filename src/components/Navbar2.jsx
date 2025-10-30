import React from "react";
import { Menu, X, Instagram, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assets/FSLogo2.png";
import { navItems } from "../constants";
import { locations } from "../constants";
import { contacts } from "../constants";


const Navbar2 = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50">
        {/* nav content container 2 */}
              <div className="container2 bg-white text-indigo-950 px-6 mx-auto relative text-sm lg:text-[17px] lg:py-2">
                {/* content items container  */}
                <div className=" flex justify-between gap-20 items-center">
                  {/* name-logo  */}
                  <div className=" flex items-center ">
                    <Link to="/">
                      <img  className="h-16 w-auto scale-150"  src={logo} alt="logo"/>
                    </Link>
                    <span className="text-[21px] tracking-tight font-sans font-semibold text-[#D3B45E]">
                      FOX SAINT LAW FIRM
                    </span>
                  </div>
        
                  {/* nav-list  */}
                  <ul className="hidden md:text-md lg:flex mx-auto space-x-12 text-md font-semibold">
                    {navItems.map((item, index) => (
                      <li
                        key={index}
                        className={`hover:text-[#D3B45E] ${
                          location.pathname === item.path
                            ? "text-[#D3B45E] font-semibold"
                            : "text-indigo-950"
                        }`}
                      >
                        <Link to={item.path} onClick={() => setMobileMenuOpen(false)}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
        
                  <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                      {mobileDrawerOpen ? (
                        <X className="text-[#D3B45E] active:text-indigo-950" />
                      ) : (
                        <Menu className="active:text-[#D3B45E]" />
                      )}
                    </button>
                  </div>
                </div>
                {mobileDrawerOpen && (
                  <div className="absolute top-full left-0 z-20 bg-gray-100 text-black font-semibold text-[15px] w-full px-12 py-3 flex flex-col items-center lg:hidden animate-slideDown">
                    <ul className="flex flex-col items-center">
                      {navItems.map((item, index) => (
                        <li
                          key={index}
                          className={`py-5 ${
                            location.pathname === item.path
                              ? "text-[#D3B45E] font-semibold"
                              : "text-indigo-950"
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
  )
}

export default Navbar2
