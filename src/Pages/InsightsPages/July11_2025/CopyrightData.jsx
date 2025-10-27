import React from 'react';
import { copyrightDataInfo } from '../../../constants';

const CopyrightData = () => {
  return (
    <div className="bg-white min-h-screen w-full py-6 px-4 sm:px-6 lg:px-12">
      {copyrightDataInfo.map((item, index) => (
        <section
          key={index}
          className="max-w-5xl mx-auto mb-16 border-b border-gray-200 pb-10 w-[90%]"
        >
          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl md:mt-5 font-bold text-gray-900 mb-3 text-center leading-snug">
            {item.title}
          </h1>

          {/* Date & Organization */}
          <p className="text-gray-500 text-sm sm:text-base flex justify-center gap-1 mb-8">
            {item.date}
            <span className="font-medium">| {item.authorOrg}</span>
          </p>

          {/* Article Sections */}
          <div className="space-y-10 w-full sm:w-[90%] mx-auto">
            {item.sections.map((section, sIdx) => (
              <div key={sIdx}>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2">
                  {section.header}
                </h2>

                {/* Main Text */}
                {section.text && (
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3">
                    {section.text}
                  </p>
                )}

                {/* Subsections */}
                {section.subsections && (
                  <div className="pl-3 sm:pl-6 border-l-4 border-gray-200 space-y-4">
                    {section.subsections.map((sub, subIdx) => (
                      <div key={subIdx}>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 py-3">
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

                {/* Extra Paragraphs */}
                {section.extraText &&
                  section.extraText.map((text, tIdx) => (
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
            <div className="mt-10 bg-gray-50 p-4 sm:p-6 rounded-xl shadow-sm">
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

          {/* Contributors */}
          {/* <div className="mt-12">
            <h2 className="text-gray-700 text-lg sm:text-xl font-semibold mb-4">
              {item.credits || 'Contributors'}
            </h2>

            <div className="flex flex-row sm:grid-cols-2 md:grid-cols-3 gap-6">
              {item.contributors.map((person, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start sm:items-start sm:flex-row text-start sm:text-left md:flex-col"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-52 h-52 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-2xl object-cover mb-2"
                  />
                  <div>
                    <p className="text-xl font-semibold text-gray-800 sm:text-base">
                      {person.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </section>
      ))}
    </div>
  );
};

export default CopyrightData;
