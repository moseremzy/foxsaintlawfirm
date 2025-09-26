import { explore } from "../constants";
import {ExploreCard} from "../constants"
import { Link } from "react-router-dom";

const Insight = () => {
  return (
    <div className="bg-gradient-to-r from-[#222268] to-[#16163F]">
      <div className="h-fit pt-20 pb-7 px-5 flex flex-col justify-between gap-5 w-fit md:flex-row md:items-center lg:py-20">
        {ExploreCard.map((item,index)=>(
          <>
          <section key={index} className="flex flex-col gap-10 h-fit justify-center items-start md:w-[70%] lg:w-[65%]">
          <article className="flex flex-col gap-6">
            <h4 className="font-bold">{item.header}</h4>
            <h2 className="text-3xl font-semibold">
              {item.description}
            </h2>
          </article>
        </section>

        <Link to={item.path}>
          <button className="bg-gradient-to-l from-orange-400 to-[#eb873b] w-45 py-3 rounded-3xl text-sm font-semibold cursor-pointer md:hover:bg-none md:hover:bg-orange-300">
            {item.section}
          </button>
        </Link>
          </>
        ))}
      </div>

      <ul className="flex flex-col px-5 pb-20 font-semibold list-none md:flex-row gap-7">
        {explore.map((item, index) => (
          <li key={index} className="flex flex-col pt-0 py-7">
            <Link to={item.path}>
              <img
                src={item.image}
                alt=""
                className="rounded h-75 w-full md:w-fit md:h-fit"
              />
              <p className="active:text-purple-500">{item.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Insight;
