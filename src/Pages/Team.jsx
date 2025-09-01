import React from 'react'
import TeamBanner from '../components/TeamBanner'
import TeamData from '../components/TeamData'

const Team = () => {
  return (
     <main className="flex flex-col w-full h-fit text-indigo-950">
      <TeamBanner />
      <TeamData />
    </main>
  )
}

export default Team
