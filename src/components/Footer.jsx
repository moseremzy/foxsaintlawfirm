import React from "react";
import logo from "../assets/logo.png";
import { practiceAreas } from "../constants";
import { intouch } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-indigo-950">
      {/* CTA Bar */}
      <div className="w-full py-5 bg-gradient-to-l from-[#f79f1d] to-[#f59e1b] text-center text-md font-semibold md:text-xl lg:py-8 lg:text-2xl">
        <a href="#" className="hover:underline">
          Need help? Let us know how we can help you
        </a>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-5 py-8 lg:py-16 flex flex-col md:flex-row gap-10">
        {/* Company Info */}
        <div className="space-y-2 flex-col justify-center">
          <div className="flex items-center gap-3 lg:gap-1">
            <img
              src={logo}
              alt="Alliance Logo"
              className="w-14 h-14 object-contain"
            />
            <h2 className="text-[26px] font-semibold lg:text-[22px]">
              ALLIANCE LAW FIRM
            </h2>
          </div>
          <p className="text-[14px] mb-7 lg:w-[280px] lg:text-[15px] ">
            We are a full-service law firm with a depth of proven experience and
            expertise in diverse areas of the law.
          </p>
          <p className="font-semibold mt-2 mb-7 lg:mb-2">Members of</p>
          <div className="flex justify-between">
            <img src={logo} alt="" className="w-16 h-16 object-contain" />
            <img src={logo} alt="" className="w-16 h-16 object-contain" />
            <img src={logo} alt="" className="w-16 h-16 object-contain" />
          </div>
        </div>

        {/* Practice Areas */}
        <div className="flex flex-col">
          <p className="font-bold text-xl mb-4">Practice Areas</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {practiceAreas.slice(0, 8).map((item, index) => (
              <li key={index}>
                <a href={item.href} className="none active:text-purple-500 text-[14px] md:hover:text-amber-400 text-md md:active:text-purple-500">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col">
          <p className="font-bold text-xl mb-4">Get in Touch</p>
          <ul className="space-y-14 text-md">
            {intouch.map((item, index) => (
              <li key={index} className="flex-col justify-between">
                <p className="font-semibold mb-5">{item.label}</p>
                <p className="mb-4">{item.address}</p>
                <p className="mb-2">{item.contact}</p>
                <a href={item.href} className="none active:text-purple-500 md:hover:text-amber-400">
                  {item.number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm py-4 border-t">
        &copy; {new Date().getFullYear()} Alliance Law Firm. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
