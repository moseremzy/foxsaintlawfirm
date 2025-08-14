import React from 'react';
import bannerImage from '../assets/profile-pictures/banner.png';

const PracticeBanner = () => {
  return (
    <section
      className="h-[180px] md:h-[300px] bg-cover bg-center flex flex-col gap-3 items-center md:items-start justify-center px-5 md:px-20"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="mt-[-50px] flex flex-col gap-5 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl">Practice Areas</h2>
        <p className="text-[16px] md:text-[19px] md:max-w-[550px] text-indigo-950">
          We pride ourselves on our sector strengths which cover diverse areas of the law.
        </p>
      </div>
    </section>
  );
};

export default PracticeBanner;
