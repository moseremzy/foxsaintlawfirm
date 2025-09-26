import React from 'react'
import womensInheritanceRights from '../../../assets/profile-pictures/womensInheritanceRights.png'

const WomenRightsBanner = () => {
  return (
    <section className="h-[250px] md:h-[350px] bg-cover bg-center flex flex-col gap-3 items-center md:items-start justify-center px-5 md:px-20"
              style={{ backgroundImage: `url(${womensInheritanceRights})` }}>
    </section>
  )
}

export default WomenRightsBanner
