import React from 'react'
import investmentsandsecurities from '../../../assets/profile-pictures/investmentandsecuritiesb.png'

const SecurityActBanner = () => {
  return (
    <section className="h-[250px] md:h-[350px] bg-cover bg-top flex flex-col gap-3 items-center md:items-start justify-center px-5 md:px-20"
                  style={{ backgroundImage: `url(${investmentsandsecurities})` }}>
        </section>
  )
}

export default SecurityActBanner
