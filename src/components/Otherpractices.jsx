import React from 'react'
import {otherPracticeAreas} from '../constants/index'

const Otherpractices = () => {
  return (
    <section className="w-full md:w-1/3 text-red-400 p-6 md:pt-20 md:flex flex-col items-end ">
                    {otherPracticeAreas.map((item, index) => (
                      <section key={index} className="md:pt-10">
                        <h1 className="text-3xl md:text-[18px] font-bold mb-4">
                          {item.title}
                        </h1>
                        <ul className="space-y-2">
                          {item.areas.map((area, idx) => (
                            <li key={idx} className="md:hover:underline md:cursor-pointer md:text-[15px]">{area.name}</li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </section>
  )
}

export default Otherpractices
