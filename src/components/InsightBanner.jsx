import React from 'react'
import bannerImage from "../assets/profile-pictures/banner.png";

const InsightBanner = () => {
  return (
     <section
                className="h-[180px] md:h-[300px] bg-cover bg-center flex flex-col gap-3 items-center md:items-start justify-center px-5 md:px-20"
                style={{
                  backgroundImage: `url(${bannerImage})`,
                }}
              >
                <section className='mt-[-50px] flex flex-col gap-5 text-center md:text-start'>
                    <h2 className="text-4xl md:text-6xl">Insights</h2>
                <p className="w-fit text-[16px] md:text-[19px] md:w-[550px]  text-indigo-950 text-center md:text-start">
                  Learn from our deep perception on important legal issues happening around the globe.
                </p>
                </section>
                
              </section>
  )
}

export default InsightBanner
