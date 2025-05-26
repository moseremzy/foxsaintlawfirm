import React from "react";
import ESG from '../assets/profile-pictures/ESG.png'

const Insight = () => {
  return (
    <div>
    <div className="bg-gradient-to-r from-[#222268] to-[#16163F] h-fit pt-20 pb-10 px-5 flex flex-col justify-between gap-5 w-fit md:flex-row md:items-center lg:py-20">
      
        <section className="flex flex-col gap-10 h-fit justify-center items-start md:w-[70%] lg:w-[65%]">
        <article className="flex flex-col gap-6">
          <h4 className="font-bold">INSIGHTS</h4>
          <h2 className="text-3xl font-semibold">
            Learn from our deep perception on important legal issues happening
            around the globe.
          </h2>
        </article>
      </section>

      <section>
        <button className="bg-orange-500 w-45 py-3 rounded-3xl text-sm font-semibold">
          EXPLORE INSIGHTS
        </button>
      </section>
       
    </div > 

    <div className="p-5">
    <img src={ESG} alt="" />
    </div>
    
    </div>
  );
};

export default Insight;
