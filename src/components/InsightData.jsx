import React from 'react'
import { InsightInfo } from '../constants'
import { Link } from 'react-router-dom'

const InsightData = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-5">
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {InsightInfo.map((item, index) => (
          <Link to={item.path}
            key={index}
            className="bg-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-48 object-cover"
            />
            <div className="h-full p-4 flex flex-col gap-2">
              <p className="text-gray-800 text-lg font-medium">{item.text}</p>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default InsightData
