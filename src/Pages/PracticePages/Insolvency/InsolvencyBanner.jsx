import React from 'react'
import idrbracrp from '../../../assets/profile-pictures/idrbracrp.png'

const InsolvencyBanner = () => {
  return (
     <section
          className="h-[250px] md:h-[200px] bg-cover bg-center flex flex-col gap-3 items-center md:items-start justify-center px-5 md:px-20"
          style={{ backgroundImage: `url(${idrbracrp})` }}
        >
          <div className="mt-[-50px] flex flex-col gap-5 text-center md:text-left">
            <h1
              className="text-4xl md:text-[48px] font-semibold"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              Insolvency, Debt Recovery, Business Rescue and Corporate Restructuring Practice.
            </h1>
          </div>
        </section>
  )
}

export default InsolvencyBanner
