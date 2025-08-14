import React, { useState } from "react";
import { corporateFinanceContent } from "../../../constants";
import { capitalMarketsContent } from "../../../constants";
// import { otherPracticeAreas } from "../../../constants";
import Otherpractices from '../../../components/Otherpractices'

const CorporateData = () => {
  const [activeTab, setActiveTab] = useState("corporate"); // 'corporate' or 'capital'

  return (
    <main className="bg-white text-black w-full h-fit flex flex-col md:flex-row px-5 md:pt-10">
      {/* LEFT COLUMN (Red Background with Tabs) */}
      <section className="py-6 w-full md:w-2/3 flex flex-col">
        {/* Tab Selector */}
        <section className="flex flex-col md:flex-row gap-6 py-5 md:px-13 md:py-10">
          <button
            onClick={() => setActiveTab("corporate")}
            className={`text-xl md:text-[17px] md:font-bold cursor-pointer flex items-start px-2 ${
              activeTab === "corporate" ? "text-xl text-orange-300 font-semibold" : "text-gray-600"
            }`}
          >
            CORPORATE FINANCE
          </button>
          <button
            onClick={() => setActiveTab("capital")}
            className={`text-xl md:text-[17px] md:font-bold cursor-pointer flex items-start px-2 ${
              activeTab === "capital" ? "text-xl text-orange-300 font-semibold" : "text-gray-600"
            }`}
          >
            CAPITAL MARKETS
          </button>
        </section>

        {/* Corporate Finance Section */}
        {activeTab === "corporate" &&
          corporateFinanceContent.map((item, index) => (
            <section key={index} className="flex flex-col gap-6 px-2 text-lg text-gray-600 md:px-14">
              <p className="text-[16px] md:text-[15px] text-gray-500">{item.description}</p>
              <h2 className="text-2xl md:text-xl text-gray-700 font-semibold py-4">
                {item.text}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {item.experiences.map((experience, idx) => (
                  <li key={idx} className="text-[16px] md:text-[15px]">{experience.description}</li>
                ))}
              </ul>
            </section>
          ))}

        {/* Capital Markets Section */}
        {activeTab === "capital" &&
          capitalMarketsContent.map((item, index) => (
            <section key={index} className="flex flex-col gap-6 px-2 text-lg text-gray-600 md:px-14">
              <p className="text-[16px] md:text-[15px] text-gray-500">{item.description}</p>
              <h2 className="text-2xl md:text-xl text-gray-700 font-semibold py-4">
                {item.text}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {item.experiences.map((experience, idx) => (
                  <li key={idx} className="text-[16px] md:text-[15px]">{experience.description}</li>
                ))}
              </ul>
            </section>
          ))}
      </section>

      {/* RIGHT COLUMN (Other Practice Areas) */}
      <Otherpractices />
    </main>
  );
};

export default CorporateData;
