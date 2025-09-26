import React from 'react'
import { firmnewscard } from '../constants'
import { Link } from 'react-router-dom'

const FirmNewsData = () => {
  return (
    <section className="bg-gray-100 w-full h-fit p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {firmnewscard.map((item, index) => (
          <Link
            key={index}
            to={item.link || "#"} // fallback if no link
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.section || "Firm news image"}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 flex flex-col gap-2">
              <p className="text-sm text-pink-600 font-medium">{item.section}</p>
              <p className="text-gray-500 text-xs">{item.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default FirmNewsData
