import React from 'react'
import msi1 from '../../../assets/profile-pictures/msi1.jpeg'

const MsiglobalBanner = () => {
  return (
    <section className="h-[200px] md:h-[350px] bg-cover bg-center flex flex-col gap-3 items-center md:items-start justify-center px-5 md:px-20"
                  style={{ backgroundImage: `url(${msi1})` }}>
        </section>
  )
}

export default MsiglobalBanner
