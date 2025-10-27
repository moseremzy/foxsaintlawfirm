import React from 'react'
import {securitiesAct} from '../../../constants'


const SecurityActData = () => {
  return (
    <div className='bg-white text-gray-700 w-full min-h-screen p-6 overflow-y-auto flex flex-col justify-center items-center'>
      {securitiesAct.map((item, index) => (
        <section
          key={index}
          className='w-[95%] md:mt-20 flex flex-col justify-center items-center mb-10'
        >
          <h1 className='mt-5 py-3 px-10 font-bold text-xl md:text-3xl text-center'>
            {item.header}
          </h1>
          <p className='text-[15px] text-gray-500 mb-4'>
            {item.date}
          </p>

          {/* Render content as paragraphs */}
          <article className='px-5 md:px-20 prose prose-sm max-w-none text-justify whitespace-pre-line'>
            {item.content}
          </article>

          {/* <section className='px-3 md:px-20 w-full mt-10'>
            <h1 className='font-semibold text-xl'>Author</h1>
            <img
              src={item.image}
              alt={item.name}
              className='size-[200px] mt-1'
            />
            <p>{item.name}</p>
            <p>{item.role}</p>
          </section> */}
        </section>
      ))}
    </div>
  )
}

export default SecurityActData
