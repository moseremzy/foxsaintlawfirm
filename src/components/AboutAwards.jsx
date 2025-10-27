import React, { useState } from 'react';
import bannerImage from "../assets/profile-pictures/bannerb.png";
import { aboutAwardsAndAccolades } from '../constants';
import { Plus, X } from "lucide-react";

const AboutAwards = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which section is open

  const toggleSection = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if same section is clicked
    } else {
      setOpenIndex(index); // Open the clicked section
    }
  };

  return (
    <div className='w-full h-full text-white'>
      <section
        className="h-full bg-cover bg-center flex flex-col items-center justify-start py-16 px-5 md:px-20"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <p className="text-3xl md:text-3xl md:font-normal pb-5">Awards & Accolades</p>

        {aboutAwardsAndAccolades.map((item, index) => (
          <section key={index} className='w-full px-3 md:w-2xl md:text-xl max-w-3x'>
            <div className='border-b-1 border-orange-300'>
              <div className='flex flex-row justify-between items-center'>
                <span className='py-5 font-semibold'>{item.section}</span>

                <button
                  onClick={() => toggleSection(index)}
                  className='text-orange-300 cursor-pointer'
                >
                  {openIndex === index ? (
                    <X className="active:text-indigo-950" />
                  ) : (
                    <Plus className="active:text-orange-500" />
                  )}
                </button>
              </div>

              {/* Only show the list if the section is open */}
              {openIndex === index && (
                <ul className='flex text-orange-300 px-5 flex-col gap-2 pb-3'>
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc.label}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

       {/* <a
  href="/assets/Alliance-Law-Firm-Profile-Jan-2025.pdf"
  download="Alliance-Law-Firm-Profile-Jan-2025.pdf"
  className="bg-white hover:animate-pulse text-indigo-950 font-bold px-5 py-3 rounded-2xl shadow transition mt-20"
>
  DOWNLOAD FIRM'S PROFILE
</a> */}


      </section>
    </div>
  );
};

export default AboutAwards;
