import React from 'react'
import esg from '../../../assets/profile-pictures/esg.png'

const EnvironmentalBanner = () => {
  return (
    <section className="h-[250px] md:h-[300px] bg-cover bg-center flex flex-col gap-3 items-center md:items-start justify-center px-5 md:px-20"
                         style={{ backgroundImage: `url(${esg})` }}>
               </section>
  )
}

export default EnvironmentalBanner
