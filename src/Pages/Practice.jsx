import React from 'react';
import PracticeBanner from '../components/PracticeBanner';
import PracticeData from '../components/PracticeData';

const Practice = () => {
  return (
    <main className="bg-white flex flex-col w-full h-fit text-indigo-950">
      <PracticeBanner />
      <PracticeData />
    </main>
  );
};

export default Practice;
