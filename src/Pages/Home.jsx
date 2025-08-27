import React from 'react'
import Hero from '../components/Hero'
import Newsbar from '../components/Newsbar'
import About from '../components/About'
import Practice from '../components/Practice'
import Insight from '../components/Insight'
import TeamCard from '../components/TeamCard'

const Home = () => {
  return (
    <div>
      <Hero />
      <Newsbar />
      <About />
      <Practice />
      <TeamCard />
      <Insight />
    </div>
  )
}

export default Home
