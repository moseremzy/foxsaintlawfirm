import React from "react";
import user2 from "../assets/profile-pictures/user2.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

const Team = () => {
  return (
    <div className="bg-gradient-to-l from-orange-300 to-orange-400 flex flex-col h-fit md:flex-row md:h-1/2">
      <section className="bg-purple-500 flex flex-row lg:w-[106%]">
        <img src={user6} alt="" className="w-[50%]" />
        <img src={user2} alt="" className="w-[50%]" />
      </section>

      <section className="text-indigo-950 flex flex-col items-start gap-5 p-7 lg:w-full lg:p-10">
        <h3 className="font-semibold font-sans tracking-wide ">OUR TEAM</h3>
        <h1 className="font-semibold text-3xl">
          Specialists in Diverse Legal Diciplines
        </h1>
        <p>
          Introducing our outstanding team of legal professionals, each
          possessing extensive expertise across various jurisdictions and
          practice areas.
        </p>

        <button className="bg-blue-950 rounded-2xl py-3 px-5 text-sm text-white font-semibold">
          <a href="" className="">
            OUR PEOPLE
          </a>
        </button>
      </section>
    </div>
  );
};

export default Team;
