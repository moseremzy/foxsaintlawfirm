import React from 'react';
import { aboutIdentity, aboutIdentity2 } from '../constants';

const AboutIdentity = () => {
  return (
    <div className="bg-white w-full h-fit px-7 md:px-10 py-10">
      {aboutIdentity.map((item, index) => (
        <section
          key={index}
          className="flex flex-col md:flex-row md:items-center gap-10"
        >
          {/* Image: bottom on mobile, left on desktop */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <img
              src={item.image}
              alt="Law Team"
              className="w-full h-auto md:h-[400px] object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Text: top on mobile, right on desktop */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl text-gray-600 mb-6">{item.section}</h2>
            {item.description.split('\n\n').map((paragraph, i) => (
              <p
                key={i}
                className="mb-4 text-[14.7px] text-gray-700 font-semibold leading-relaxed"
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </section>
      ))}

      {/* aboutIdentity2 */}
      {aboutIdentity2.map((item, index) => (
        <section
          key={index}
          className="flex flex-col md:flex-row md:items-center gap-10"
        >
          {/* Image: bottom on mobile, left on desktop */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              src={item.image}
              alt="Law Team"
              className="w-full h-auto md:h-[500px] object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Text: top on mobile, right on desktop */}
          <div className="w-full md:w-1/2 order-2 md:order-1 md:pt-10">
            {item.description.split('\n\n').map((paragraph, i) => (
              <p
                key={i}
                className="mb-4 text-[14.7px] text-gray-700 font-semibold leading-relaxed"
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default AboutIdentity;
