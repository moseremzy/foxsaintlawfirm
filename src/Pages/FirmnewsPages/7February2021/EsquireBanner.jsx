import React from 'react'
import Esquire from '../../../assets/profile-pictures/Esquire2.jpg'

const EsquireBanner = () => {
  return (
     <section className="h-[200px] md:h-[350px] bg-cover bg-top flex flex-col gap-3 items-center md:items-start justify-center px-5 md:px-20"
                          style={{ backgroundImage: `url(${Esquire})` }}>
                </section>
  )
}

export default EsquireBanner
