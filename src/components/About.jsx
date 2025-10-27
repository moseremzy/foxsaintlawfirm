import React from "react";
import lawyer from "../assets/profile-pictures/lawyer.jpg";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="flex flex-col h-full md:flex-row lg:flex-row md:h-130 text-indigo-950">
      <img src={lawyer} alt="" className="block md:hidden w-full md:size-fit h-[400px] object-cover"/>
      <section className="bg-gradient-to-r from-neutral-50 to-gray-300 flex flex-col gap-10 p-6 w-full justify-center items-start md:hidden lg:hidden">
        <h1 className="text-3xl font-semibold lg:w-md">
          Decades of Providing Premium Legal Service
        </h1>
        <p className="font-semibold text-lg lg:px-20 lg:text-sm">
          Fox Saint Law Firm harnesses its skilled workforce and advanced
          technology to deliver exceptional legal service. Our team consists of
          industry-recognized partners, consultants, and lawyers who operate
          from three key commercial centers in China, Australia, and United States. 
          We offer value-added legal service, drawing from a diverse
          mix of expertise and decades of experience in corporate commercial
          transactions and advanced dispute resolution.
        </p>
        
        <Link to="/about" className="inline-flex items-center gap-1 font-semibold animate-pulse hover:text-orange-400">
          Learn More About Us <ChevronRight className="w-4 h-4" />
        </Link>
      </section>

      {/* reversed medium to larg display  */}
      <section className="hidden md:flex md:w-1/2 bg-gradient-to-r from-neutral-50 to-gray-300 flex-col gap-7 px-20 w-full justify-center items-start lg:w-1/2">
        <h1 className="text-3xl font-semibold lg:w-md">
          Decades of Providing Premium Legal Service
        </h1>
        <p className="font-semibold lg:text-xl">
          Fox Saint Law Firm harnesses its skilled workforce and advanced
          technology to deliver exceptional legal service. Our team consists of
          industry-recognized partners, consultants, and lawyers who operate
          from three key commercial centers in China, Australia, and United States.
          We offer value-added legal service, drawing from a diverse
          mix of expertise and decades of experience in corporate commercial
          transactions and advanced dispute resolution.
        </p>
        <Link to="/about" className="inline-flex items-center gap-1 font-semibold animate-pulse hover:text-orange-400">
          Learn More About Us <ChevronRight className="w-4 h-4" />
        </Link>
      </section>

      <img
        src={lawyer}
        alt=""
        className="hidden md:block md:w-1/2 lg:w-1/2 object-cover"
      />
    </div>
  );
};

export default About;
