import React from "react";
import { Menu, X, Instagram, Linkedin, Facebook } from "lucide-react";
import { locations } from "../constants";
import { contacts } from "../constants";

const Navbar = () => {
  return (
    // navigation bar
    <nav className=" bg-[#16163F] backdrop-blur-lg ">
      {/* nav content container 1  */}
      <div className="container1 mx-auto relative text-sm px-6 lg:px-20 lg:py-1">
        <div className="md:hidden flex flex-row justify-between items-center">
          <div className="socialHandles text-sm bg-inherit flex flex-row py-2 space-x-2.5">
            <a href="#" className="active:text-purple-500">
              <Instagram />
            </a>
            <a href="#" className="active:text-purple-500">
              <Linkedin />
            </a>
            <a href="#" className="active:text-purple-500">
              <Facebook />
            </a>
          </div>

          <ul className="locations flex flex-row space-x-1.5">
            {locations.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="active:text-purple-500">
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
          <div className="socialHandles text-sm bg-inherit flex flex-row py-2 space-x-2">
            <a href="#" className="hover:text-pink-500 active:text-purple-500">
              <Instagram />
            </a>
            <a href="#" className="hover:text-green-300 active:text-purple-500">
              <Linkedin />
            </a>
            <a
              href="#"
              className="hover:text-indigo-600 active:text-purple-500"
            >
              <Facebook />
            </a>
          </div>

          <ul className="flex flex-row space-x-4">
            {contacts.map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 hover:text-purple-400 active:text-purple-300"
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

    </nav>
  );
};

export default Navbar;
