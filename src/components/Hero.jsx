import React from "react";
import { trackRecords } from "../constants";

const Hero = () => {
  return (
    <hero>
      <div className="w-full h-fit flex-column items-center justify-center bg-gradient-to-r from-[#0f1136b0] to-[#242874b0]">
        <section className="flex flex-col items-center justify-center">
          <section className="flex flex-col gap-4 justify-center items-center py-15 lg:mt-10">
            <span className=" flex items-center justify-center text-center mx-auto font-mono size-full w-full tracking-wider lg:text-xl">
              YOUR TRUSTED LEGAL PARTNER
            </span>

            <span className="text-center mx-auto px-10 text-4xl font-sans lg:text-6xl w-full max-w-[1000px]">
              Navigating the Complex Legal Landscapes
            </span>
          </section>

          <section className="flex flex-col items-center justify-center size-full h-fit p-5 gap-10 font-sans text-lg lg:hidden">
            <article className="flex flex-col text-center font-semibold font-san text-md">
              A Full-Service Law firm with a depth of proven experience and
              expertise in diverse areas of the law
            </article>
            <ul className="flex flex-col w-full lg:flex-row">
              {trackRecords.map((item, index) => (
                <li key={index} className="w-full text-center mb-6">
                  <span>{item.label} </span> <br />
                  <span className="text-xl font-semibold">{item.info}</span>
                  {index < trackRecords.length - 1 && (
                    <hr className="w-full h-px bg-black mt-2" />
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* reversed */}
          <section className="hidden lg:flex flex-col items-start justify-start  size-full h-fit p-5 gap-[35%] font-sans text-lg lg:flex-row">
            <ul className="flex flex-col w-fit lg:flex-row ">
              {trackRecords.map((item, index) => (
                <li
                  key={index}
                  className="w-full text-center mb-6 lg:mb-0 lg:flex lg:items-center lg:gap-2"
                >
                  <div className="flex flex-col items-start">
                    <span>{item.label}</span>
                    <span className="text-xl font-semibold">{item.info}</span>
                  </div>

                  {/* Show vertical divider only on large screens */}
                  {index < trackRecords.length - 1 && (
                    <div className="hidden lg:block w-px h-12 bg-gray-500 mx-4"></div>
                  )}
                </li>
              ))}
            </ul>

            <article className="flex flex-col font-semibold font-san text-md w-md">
              A Full-Service Law firm with a depth of proven experience and
              expertise in diverse areas of the law
            </article>
          </section>
        </section>
      </div>
    </hero>
  );
};

export default Hero;
