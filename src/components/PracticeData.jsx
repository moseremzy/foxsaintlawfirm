import React from 'react';
import { practiceAreasTemplate } from '../constants';
import { Link } from 'react-router-dom';

const PracticeData = () => {
  const isOdd = practiceAreasTemplate.length % 2 !== 0;

  return (
    <div className="bg-white w-full py-10 px-3 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {practiceAreasTemplate.map((item, index) => {
          const isLast = index === practiceAreasTemplate.length - 1;

          return (
            <Link
              to={item.path}
              key={index}
              className={`bg-cover bg-center h-85 md:h-52 lg:h-72 rounded-3xl flex justify-center items-center text-center md:text-start
                ${isLast && isOdd ? 'md:col-span-1 md:justify-self-start' : ''}`}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <span
                className="text-2xl md:text-3xl md:font-semibold text-white px-4 py-2"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
              >
                {item.text}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PracticeData;
