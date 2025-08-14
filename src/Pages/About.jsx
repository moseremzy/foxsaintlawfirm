import React from 'react'
import AboutBanner from '../components/AboutBanner'
import AboutData from '../components/AboutData'
import AboutIdentity from '../components/AboutIdentity'
import AboutAwards from '../components/AboutAwards'

const About = () => {
  return (
    <div className='text-indigo-950 bg-white h-fit flex flex-col'>
     <AboutBanner/>
     <AboutData/>
     <AboutIdentity/>
     <AboutAwards />
    </div>
  )
}

export default About
