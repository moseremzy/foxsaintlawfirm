import React from 'react'
import allianceBanner from '../../../assets/profile-pictures/acsl.png'

const AllianceBanner = () => {
  return (
    <section
              className="h-[250px] md:h-[200px] bg-cover bg-center flex flex-col gap-3 items-center md:items-start justify-center px-5 md:px-20"
              style={{ backgroundImage: `url(${allianceBanner})` }}
            >
              <div className="mt-[-50px] flex flex-col gap-5 text-center md:text-left">
                <h1 
                className="text-4xl md:text-[58px] font-semibold"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                >Fox Saint Corporate Secretaries Limited (FSCSL)</h1>
              </div>
            </section>
  )
}

export default AllianceBanner
