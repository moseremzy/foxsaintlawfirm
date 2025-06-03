import React from "react";
import logo from "../assets/logo.png";
import { practiceAreas } from "../constants";
import { intouch } from "../constants";

const Footer = () => {
  return (
    <footer>
      {/* CTA Bar */}
      <div className="w-full py-5 bg-amber-400 text-center text-md font-semibold md:text-xl lg:py-8 lg:text-2xl">
        <a href="#" className="hover:underline">
          Need help? Let us know how we can help you
        </a>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Alliance Logo"
              className="w-14 h-14 object-contain"
            />
            <h2 className="text-2xl font-bold">ALLIANCE LAW FIRM</h2>
          </div>
          <p className="text-md font-medium">
            We are a full-service law firm with a depth of proven experience and
            expertise in diverse areas of the law.
          </p>
          <p className="font-semibold">Members of</p>
          <div className="flex gap-3">
            <img src={logo} alt="" className="w-16 h-16 object-contain" />
            <img src={logo} alt="" className="w-16 h-16 object-contain" />
            <img src={logo} alt="" className="w-16 h-16 object-contain" />
          </div>
        </div>

        {/* Practice Areas */}
        <div>
          <h2 className="font-bold text-xl mb-4">Practice Areas</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {practiceAreas.slice(0, 6).map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:underline text-md">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h2 className="font-bold text-xl mb-4">Get in Touch</h2>
          <ul className="space-y-4 text-md">
            {intouch.map((item, index) => (
              <li key={index}>
                <p className="font-semibold">{item.label}</p>
                <p>{item.address}</p>
                <p>{item.contact}</p>
                <a href={item.href} className="text-blue-600 hover:underline">
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
