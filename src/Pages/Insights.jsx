import React from 'react'
import InsightBanner from '../components/InsightBanner'
import InsightData from '../components/InsightData'

const Insights = () => {
  return (
    <div  className='text-indigo-950 h-fit flex flex-col'>
      <InsightBanner/>
      <InsightData/>
    </div>
  )
}

export default Insights
