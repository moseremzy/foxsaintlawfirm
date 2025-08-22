import React from 'react'
import { acslData } from '../../../constants'
import Otherpractices from '../../../components/Otherpractices'

const AllianceData = () => {
  return (
    <main className="bg-white flex flex-col md:flex-row text-gray-700 w-full px-5 pt-10">
      <section className="w-2/2 px-6">
        {acslData.map((item, index) => (
          <section key={index} className="mb-8">
            {/* Title and Intro Text */}
            <h1 className="text-lg font-bold mb-2 text-gray-600">{item.title}</h1>
            <p className="mb-4">{item.text}</p>

            {/* Resolutions */}
            {item.resolutions?.map((res, resIndex) => (
              <div key={resIndex} className="mb-6">
                <h2 className="text-xl font-semibold mb-2">{res.section}</h2>
                <ul className="list-disc list-inside space-y-1">
                  {res.cases?.map((caseItem, caseIndex) => (
                    <li key={caseIndex}>{caseItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </section>
      <Otherpractices />
    </main>
  )
}

export default AllianceData
