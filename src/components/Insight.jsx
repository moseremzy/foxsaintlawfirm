import React from "react";
import esg from "../assets/profile-pictures/esg.png";
import { explore } from "../constants";

const Insight = () => {
  return (
    <div className="bg-gradient-to-r from-[#222268] to-[#16163F]">
      <div className="h-fit pt-20 pb-7 px-5 flex flex-col justify-between gap-5 w-fit md:flex-row md:items-center lg:py-20">
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
      </div>

      <ul className="flex flex-col px-5 pb-20 font-semibold list-none md:flex-row gap-7">
        {explore.map((item, index) => (
          <li key={index} className="flex flex-col pt-0 py-7">
            <a href={item.href}>
              <img
                src={item.image}
                alt=""
                className="rounded h-75 w-full md:w-fit md:h-fit"
              />
              <p>{item.text}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Insight;
