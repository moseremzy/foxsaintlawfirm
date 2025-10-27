import React from 'react'
import taxBanner from '../.../../../../assets/profile-pictures/ttpp.png'
const TatpBanner = () => {
  return (
    <section
          className="h-[250px] md:h-[200px] bg-cover bg-center flex flex-col gap-3 items-center md:items-start justify-center px-5 md:px-20"
          style={{ backgroundImage: `url(${taxBanner})` }}
        >
          <div className="mt-[-50px] flex flex-col gap-5 text-center md:text-left">
            <h1
              className="text-4xl md:text-[48px] font-semibold"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              Fox Saint Law Firm Tax Practice Profile
            </h1>
          </div>
        </section>
  )
}

export default TatpBanner
