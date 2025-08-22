import React from 'react'
import { IntltlData } from '../../../constants';
import Otherpractices from '../../../components/Otherpractices'

const IntellectualData = () => {
  return (
    <main className='bg-white w-full h-full text-gray-600 flex flex-col md:flex-row py-10 px-5 gap-5 '>
        <section className='w-1/1'>
            {IntltlData.map((item,index)=>(
                <section key={index}>
                    <h1 className='font-bold py-3'>{item.title}</h1>
                    <p className='pb-5'>{item.description}</p>
                    <section>
                        <h2 className='py-3 font-semibold'>{item.section}</h2>
                        {item.tractions.map((item,index)=>(
                            <ul key={index}className='list-disc list-inside space-y-1'>
                                <li className='p-1'>{item.description}</li>
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

export default IntellectualData
