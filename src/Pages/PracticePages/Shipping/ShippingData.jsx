import React from 'react'
import {ShpngData} from '../../../constants'
import Otherpractices from '../../../components/Otherpractices'


const ShippingData = () => {
  return (
    <main className='bg-white w-full h-full text-gray-600 flex flex-col md:flex-row py-10 px-5 gap-5'>
      <section className='w-1/1'>
        {ShpngData.map((item,index)=>(
          <section key={index}>
            <h1 className='font-bold py-3'>{item.title}</h1>
          <p className='pb-5'>{item.description}</p>

          <section>
            <h2 className='py-3 font-semibold'>{item.section}</h2>
            {item.experience.map((itm,idx)=>(
              <ul key={idx} className='list-disc list-inside space-y-1'>
                <li className='p-1'>{itm.description}</li>
              </ul>
            ))}
          </section>
          </section>
          
        ))}
      </section>
      <Otherpractices />
    </main>
  )
}

export default ShippingData
