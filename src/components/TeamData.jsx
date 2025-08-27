import React from 'react'
import { TeamInfo } from '../constants'

const TeamData = () => {
  return (
    <main className='bg-white text-indigo-950 w-full h-screen'>
        <section>
            {TeamInfo.map((item,index)=>(
                <section key={index}>
                    <h2>{item.section}</h2>
                    {item.members.map((itm,idx)=>(
                        <ul key={idx}>
                            
                        </ul>
                    ))}
                </section>
            ))}
        </section>
    </main>
  )
}

export default TeamData
