import React from 'react'
import Otherpractices from '../../../components/Otherpractices'
import {disputeResolutionContent} from '../../../constants'

const DisputeResolutionData = () => {
  return (
    <main className='flex flex-col md:flex-row py-5'>
        <section className='w-full md:w-1/1'>
            {disputeResolutionContent.map((item,index)=>(
                <section key={index} className='text-gray-700 px-8'>
                    <h1 className='text-lg py-5 font-bold'>{item.title}</h1>
                    <p>{item.text}</p>
                    <ul>
                        {item.resolutions.map((resolution,idx)=>(
                            <li key={idx}>
                                <h2 className='text-lg font-semibold py-6'>{resolution.section}</h2>
                                <ul className='list-disc pl-6'>
                                    {resolution.cases.map((caseItem, caseIndex)=>(
                                        <li key={caseIndex}>{caseItem}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </section>
        {/* RIGHT COLUMN (Other Practice Areas) */}
        <Otherpractices />
    </main>
  )
}

export default DisputeResolutionData
