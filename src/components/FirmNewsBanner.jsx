import React from 'react'
import firmnewsbannerimg from '../assets/profile-pictures/fmi2.webp'

const FirmNewsBanner = () => {
  return (
    <section
        className="w-full h-[200px] md:h-[250px] bg-cover bg-center flex flex-col gap-3 items-center md:items-start justify-center px-5 md:px-20"
        style={{
            backgroundImage: `url(${firmnewsbannerimg})`,
                    }}
                  >
    </section>
  )
}

export default FirmNewsBanner
