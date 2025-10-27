// MsiglobalData.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MsiglobalInfo } from "../../../constants";

const MsiglobalData = () => {
  // If you want to support multiple items in the future, we still map,
  // but for now your data has a single item.
  return (
    <div className="min-h-screen bg-white text-gray-800 flex justify-center px-4 py-12">
      <div className=" w-[90%] space-y-8 px-9">

        {/* Back + actions row */}
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            aria-label="Back to news"
          >
            ← Back to news
          </Link>
        </div>

        {MsiglobalInfo.map((item, index) => (
          <article key={index} className="prose prose-lg max-w-none">
            {/* Title */}
            <header className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                {item.header}
              </h1>
              <p className="text-sm text-gray-500 italic">{item.date}</p>
            </header>

            {/* Image + caption */}
            

            {/* Main text (preserve line breaks) */}
            <section className="mt-4 text-base leading-relaxed text-gray-700">
              <p className="whitespace-pre-line">{item.text}</p>
            </section>

            {/* Bullet points */}
            {item.points && item.points.length > 0 && (
              <section className="mt-4">
                <h2 className="text-lg font-semibold text-gray-900">Key benefits</h2>
                <ul className="mt-3 list-disc list-inside space-y-2 pl-2 text-gray-700">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="leading-snug">
                      {point}
                    </li>
                  ))}
                </ul>

                {item.image && (
              <figure className="my-4 w-full flex flex-col justify-center items-center">
                <img
                  src={item.image}
                  alt={item.caption || item.header}
                  className="w-[70%] rounded-xl object-cover shadow-sm"
                  loading="lazy"
                />
                {item.caption && (
                  <figcaption className="mt-2 text-xs text-gray-500">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            )}
              </section>
            )}

            {/* Description */}
            {item.description && (
              <section className="mt-6">
                <h3 className="text-md font-semibold text-gray-900">About MSI Global Alliance</h3>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </section>
            )}

            {/* Notice / footer */}
            {item.notice && (
              <footer className="mt-6 border-t pt-4">
                <p className="text-sm text-gray-500">{item.notice}</p>
              </footer>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default MsiglobalData;
