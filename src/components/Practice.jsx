import React from "react";
import lawfiles from "../assets/profile-pictures/lawfiles.png";
import lawFirm from "../assets/profile-pictures/lawFirm.png";
import { practiceAreas } from "../constants";

const Practice = () => {
  return (
    <div>
      {/* Mobile View */}
      <div className="block md:hidden">
        <img src={lawFirm} alt="" className="w-full object-cover" />
        <section className="bg-[#16163F] flex flex-col gap-5 p-6 w-full justify-center items-start">
          <h1 className="text-3xl font-semibold">Practice Areas</h1>
          <p className="font-semibold">
            We take pride in our expertise across various areas of law.
          </p>
          <ul>
            {practiceAreas.map((item, index) => (
              <li
                key={index}
                className="flex flex-col py-3 text-lg justify-center items-start border-b border-gray-300 w-full last:border-b-0"
              >
                <a
                  href={item.href}
                  className="flex flex-row items-center gap-2"
                >
                  <span className="text-amber-500">{item.icon}</span>
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-row-reverse w-full">
        {/* Image on the right */}
        <img src={lawfiles} alt="" className="w-1/2 object-cover" />

        {/* Section on the left */}
        <section className="bg-[#16163F] flex flex-col gap-5 px-20 py-5 w-1/2 justify-center items-start text-white">
          <h1 className="text-3xl font-bold">Practice Areas</h1>
          <p className="text-lg font-semibold">
            We take pride in our expertise across various areas of law.
          </p>
          <ul className="w-full">
            {practiceAreas.map((item, index) => (
              <li
                key={index}
                className="flex flex-col py-3 text-lg justify-center items-start border-b border-gray-300 w-120 last:border-b-0"
              >
                <a
                  href={item.href}
                  className="flex flex-row items-center gap-2"
                >
                  <span className="text-amber-500">{item.icon}</span>
                  <span className="hover:text-amber-300">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Practice;
