import React from 'react'
import {aboutData} from '../constants'

const AboutData = () => {
  return (
    <div className='w-full bg-white h-full px-5 pt-16 md:px-10 flex flex-col md:flex-row items-center justify-around gap-2 md:gap-10'>
      {aboutData.map((item, index) => (
        <section key={index} className="mb-2 flex flex-col">
          <h2 className="text-md text-gray-600 md:font-semibold mb-2">{item.section}</h2>
          <h3 className="text-[30px] text-blue-950 pb-4 md:pb-5">{item.title}</h3>
          <hr className='text-gray-400' />
          <p className="mt-2 max-w-xl text-[15px] text-indigo-950 md:text-lg ">{item.description}</p>
        </section>
      ))}
    </div>
  )
}

export default AboutData
