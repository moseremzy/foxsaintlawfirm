import React from 'react'
import { EsgDataInfo } from "../../../constants";

const EnvironmentalData = () => {
  return (
    <div className="bg-white min-h-screen w-full px-4 sm:px-6 lg:px-12 py-8">
      {EsgDataInfo.map((item, index) => (
        <section
          key={index}
          className="max-w-5xl w-[95%] mx-auto mb-16 border-b border-gray-200 pb-12 last:border-b-0"
        >
          {/* Title */}
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4 leading-snug">
            {item.title}
          </h1>

          {/* Date & Organization */}
          <p className="text-gray-500 text-sm sm:text-base text-center mb-8">
            {item.date} <span className="font-medium">| {item.authorOrg}</span>
          </p>

          {/* Article Sections */}
          <div className="space-y-10 w-full md:w-[90%] mx-auto">
            {item.sections.map((section, sIdx) => (
              <div key={sIdx}>
                {/* Header */}
                <h2 className="text-2xl sm:text-xl md:text-3xl font-semibold text-gray-600 mb-3">
                  {section.header}
                </h2>

                {/* Main Text */}
                {section.text && (
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                    {section.text}
                  </p>
                )}

                {/* Subsections */}
                {section.subsections && (
                  <div className="pl-4 sm:pl-6 border-l-4 border-gray-200 space-y-5">
                    {section.subsections.map((sub, subIdx) => (
                      <div key={subIdx}>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                          {sub.header}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                {section.points && (
                  <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1 mt-3">
                    {section.points.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                )}

                {/* Extra Text Blocks */}
                {section.extraText?.map((text, tIdx) => (
                  <p
                    key={tIdx}
                    className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3"
                  >
                    {text}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Footnotes */}
          {item.footnotes && (
            <div className="mt-10 bg-gray-50 p-5 sm:p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3 text-base sm:text-lg">
                Footnotes
              </h3>
              <ol className="list-decimal list-inside text-xs sm:text-sm text-gray-600 space-y-1">
                {item.footnotes.map((note, fIdx) => (
                  <li key={fIdx}>{note}</li>
                ))}
              </ol>
            </div>
          )}
        </section>
      ))}
    </div>
  )
}

export default EnvironmentalData;
