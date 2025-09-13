import React from "react";
import user2 from "../assets/profile-pictures/user2.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import { Link } from "react-router-dom";
import { TeamCardInfo } from "../constants";

const TeamCard = () => {
  return (
    <div >
      {TeamCardInfo.map((item,index)=>(
        <section key={index} className="bg-gradient-to-l from-orange-300 to-[#eb873b] flex flex-col h-fit md:flex-row md:h-1/2">
          <section className="bg-purple-500 flex flex-row lg:w-[106%]">
        <img src={item.img1} alt={item.header} className="w-[50%]" />
        <img src={item.img2} alt={item.header} className="w-[50%]" />
      </section>

      <section className="text-indigo-950 flex flex-col items-start gap-5 p-7 lg:w-full lg:p-10">
        <h3 className="font-semibold font-sans tracking-wide md:text-lg md:pt-8">{item.header}</h3>
        <p className="text-3xl md:text-4xl">
          {item.description}
        </p>
        <p className="md:text-lg md:w-xl">
          {item.text}
        </p>

        <button className="bg-blue-950 rounded-2xl py-3 px-5 text-sm text-white font-semibold">
          <Link to={item.path} className="">
            {item.section}
          </Link>
        </button>
      </section>
        </section>
      ))}
      
    </div>
  );
};

export default TeamCard;
