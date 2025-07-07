import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Newsbar from '../components/Newsbar'
import About from '../components/About'
import Practice from '../components/Practice'
import Insight from '../components/Insight'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Hero />
      <Newsbar />
      <About />
      <Practice />
      <Insight />
    </div>
  )
}

export default Home
