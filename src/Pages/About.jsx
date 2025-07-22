import React from 'react'
import AboutBanner from '../components/AboutBanner'
import AboutData from '../components/AboutData'
import AboutIdentity from '../components/AboutIdentity'

const About = () => {
  return (
    <div className='text-indigo-950 h-fit flex flex-col'>
     <AboutBanner/>
     <AboutData/>
     <AboutIdentity/>
    </div>
  )
}

export default About
