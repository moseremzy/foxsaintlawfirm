import React from 'react'
import {TtppData} from '../../../constants'
import Otherpractices from '../../../components/Otherpractices'

const TatpData = () => {
  return (
  <main className='bg-white w-full h-full text-gray-600 flex flex-col md:flex-row py-10 px-5 md:px-20 gap-5'>
    <section className='w-1/1'>
      {TtppData.map((item,index)=>(
        <section key={index}>
          <h1 className='text-xl font-bold py-3'>{item.title}</h1>
          <section className="space-y-3 text-gray-600 leading-relaxed md:text-[15px]">
               {item.content.trim().split(/\n\s*\n/).map((para, i) => (
                   <p key={i} className='pb-5'>{para.trim()}</p>
                 ))}
           </section>
           <section>
            {item.sections.map((sec,idx)=>(
              <section key={idx}>
                <h2 className='py-3 font-semibold'>{sec.title}</h2>
                <ul className='list-disc list-inside space-y-1'>
                  {sec.items.map((list,i)=>(
                      <li key={i}>{list}</li>
                  ))}
                </ul>
                
              </section>
            ))}
           </section>
           
        </section>
      ))}
    </section>
    <Otherpractices />
  </main>





















    // <div className="p-6 grid gap-6">
    //   {TtppData.map((section, index) => (
    //     <div key={index} className="shadow-lg rounded-2xl bg-white">
    //       <div className="p-6 space-y-4">
    //         <h2 className="text-2xl font-bold text-gray-800">
    //           {section.title}
    //         </h2>

    //         {/* Content paragraphs */}
    //         <div className="space-y-3 text-gray-600 leading-relaxed">
    //           {section.content
    //             .trim()
    //             .split(/\n\s*\n/)
    //             .map((para, i) => (
    //               <p key={i}>{para.trim()}</p>
    //             ))}
    //         </div>

    //         {/* Render subsections */}
    //         {section.sections.map((sub, subIndex) => (
    //           <div key={subIndex} className="mt-6 space-y-3">
    //             <h3 className="text-xl font-semibold text-gray-700">
    //               {sub.title}
    //             </h3>
    //             <ul className="list-disc list-inside space-y-1 text-gray-600">
    //               {sub.items.map((item, itemIndex) => (
    //                 <li key={itemIndex}>{item}</li>
    //               ))}
    //             </ul>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   ))}
    // </div>
  )
}

export default TatpData
