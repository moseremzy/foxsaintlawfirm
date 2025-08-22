import React from 'react'
import { InsolvencyInfo } from '../../../constants'
import Otherpractices from '../../../components/Otherpractices'

const InsolvencyData = () => {
  return (
    <main className='bg-white w-full h-full text-gray-600 flex flex-col md:flex-row py-10 px-5  md:px-15 gap-5'>
        <section className='w-1/1'>
            {InsolvencyInfo.map((item,index)=>(
                <section key={index}>

                    <h1 className='font-bold py-3'>{item.title}</h1>

                    <section className="space-y-3 text-gray-600 leading-relaxed md:text-[15px]">
                    {item.text.trim().split(/\n\s*\n/).map((para, i) => (
                   <p key={i} className='pb-2'>{para.trim()}</p>
                     ))} </section>

                     <section>
                        <h2 className='py-3 font-semibold'>{item.section}</h2>
                        {item.experience.map((itm,idx)=>(
                            <ul className='list-disc list-inside space-y-1' key={idx}>
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

export default InsolvencyData
