import React from "react";
import bannerImage from "../assets/profile-pictures/banner.png";

const AboutBanner = () => {
  return (
    <section
      className="h-[180px] md:h-[300px] bg-cover bg-center flex flex-col gap-3 items-center md:items-start justify-center px-5 md:px-20"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <h2 className="text-4xl md:text-6xl">About Us</h2>
      <p className="w-fit text-[16px] md:text-[19px] md:w-[550px]  text-indigo-950 text-center md:text-start">
        We are a Full-Service Law firm with a depth of proven experience and
        expertise in diverse areas of the law
      </p>
    </section>
  );
};

export default AboutBanner;
