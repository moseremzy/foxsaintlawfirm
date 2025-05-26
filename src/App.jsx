import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Newsbar from './components/Newsbar'
import About from './components/About'
import Practice from './components/Practice'
import Team from './components/Team'
import Insight from './components/Insight'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Newsbar />
      <About />
      <Practice />
      <Team />
      <Insight />
    </div>
  )
}

export default App
