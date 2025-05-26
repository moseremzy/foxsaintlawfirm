import React, { useEffect, useState } from 'react';
import { newsMessages } from '../constants'; // Update path as needed

const Newsbar = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // Start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % newsMessages.length);
        setVisible(true); // Fade in next message
      }, 300); // Match this with fade-out animation duration
    }, 3000); // Show each message for 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='sticky top-[100px] z-40 bg-gradient-to-r from-blue-800 to-blue-950 h-16 w-full flex items-center justify-center overflow-hidden'>

      <div
        className={`text-white text-lg text-center font-semibold transition-all duration-500 transform ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        {newsMessages[index]}
      </div>
    </div>
  );
};

export default Newsbar;
