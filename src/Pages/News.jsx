import React from 'react'
import FirmNewsBanner from '../components/FirmNewsBanner'
import FirmNewsData from '../components/FirmNewsData'

const News = () => {
  return (
    <div className='bg-white h-fit flex flex-col gap-10'>
      <FirmNewsBanner/>
      <FirmNewsData/>
    </div>
  )
}

export default News
