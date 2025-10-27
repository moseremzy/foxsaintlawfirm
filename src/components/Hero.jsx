import React from "react";
import { trackRecords } from "../constants";
import GoogleTranslate from "../components/GoogleTranslate";

const Hero = () => {
  return (
    <section className="relative">  {/* <--- hero wrapper */}


      <div className="w-full h-fit flex-column items-center justify-center bg-gradient-to-r from-[#0f1136b0] to-[#242874b0]">
      {/* Translate widget */}
      <div className="absolute top-4 right-4 z-10">
  <GoogleTranslate />
</div>
        <section className="flex flex-col items-center justify-center">
          <section className="flex flex-col gap-4 justify-center items-center pt-15 pb-5 md:py-12 lg:mt-10">
            <span className=" flex items-center text-md pt-2 md:pt-0 font-semibold justify-center text-center mx-auto font-mono size-full w-full tracking-widest lg:text-xl">
              YOUR TRUSTED LEGAL PARTNER
            </span>

            <span className="text-center tracking-wider leading-15 md:leading-18 mx-auto px-6 pt-2 md:pt-0 text-4xl font-sans md:text-5xl lg:text-6xl w-full max-w-[1000px]">
              Navigating the Complex Legal Landscapes
            </span>
          </section>

          <section className="flex flex-col items-center justify-center size-full h-fit p-5 gap-10 font-sans text-lg lg:hidden">
            <article className="flex flex-col text-center font-semibold font-san text-[15px] md:text-md">
              A Full-Service Law firm with a depth of proven experience and
              expertise in diverse areas of the law
            </article>
            <ul className="flex flex-col w-full lg:flex-row">
              {trackRecords.map((item, index) => (
                <li key={index} className="w-full text-center mb-6">
                  <span className="text-[15px] md:text-md">{item.label}</span>
                  <br />
                  <span className="text-[18px] md:text-xl font-semibold">
                    {item.info}
                  </span>
                  {index < trackRecords.length - 1 && (
                    <div className="mt-2 h-0.5 bg-gray-500 mx-4"></div>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className="hidden lg:flex flex-col items-start justify-start size-full h-fit p-5 gap-[35%] font-sans text-lg lg:flex-row">
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
    </section>
  );
};

export default Hero;
