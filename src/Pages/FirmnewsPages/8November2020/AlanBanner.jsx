import React from 'react'
import Alan1 from '../../../assets/profile-pictures/alan1.webp'


const AlanBanner = () => {
  return (
    <section className="h-[200px] md:h-[350px] bg-cover bg-top flex flex-col gap-3 items-center md:items-start justify-center px-5 md:px-20"
                      style={{ backgroundImage: `url(${Alan1})` }}>
            </section>
  )
}

export default AlanBanner
