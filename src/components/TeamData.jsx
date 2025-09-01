import React from 'react'
import { TeamInfo } from '../constants'
import { Link } from 'react-router-dom'

const TeamData = () => {
  return (
    <main className='w-full'>
        <section className='bg-white text-indigo-950 flex flex-col gap-10 '>
            {TeamInfo.map((item,index)=>(
                <section key={index} className='md:p-7 md:px-20 flex flex-col gap-10'>
                    <h2 className='text-2xl font-semibold flex justify-center md:justify-start'>{item.section}</h2>
                    <section className='px-5 py-7 gap-5 grid grid-cols-2 lg:grid-cols-4 md:gap-9'>
                      {item.members.map((members,idx)=>(
                      <Link key={idx}>
                        <img src={members.image} alt={item.section} className='h-60 w-72 rounded-lg'/>
                        <h3 className="mt-2 font-medium">{members.name}</h3>
                        <p className="text-sm text-blue-950">{members.role}</p>
                        <Link className='flex flex-row gap-2 py-3'>
                          <div className='bg-indigo-950 rounded-[100%] p-1 text-white'>{members.linkedin}</div>
                          <div className='bg-indigo-950 rounded-[100%] p-1 text-white'>{members.email}</div>
                        </Link>
                      </Link>
                    ))}
                    </section>
                    
                </section>
            ))}
        </section>
    </main>
  )
}

export default TeamData