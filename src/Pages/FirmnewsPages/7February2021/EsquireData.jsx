import React from "react";
import { Link } from "react-router-dom";
import { Esquire2021Info } from "../../../constants";

const EsquireData = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex justify-center px-4 py-12">
      <div className="w-[90%] space-y-8 ">

        {/* Back to news */}
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            ← Back to news
          </Link>
        </div>

        {Esquire2021Info.map((item, index) => (
          <article key={index} className="prose prose-lg max-w-none">

            {/* Title & Date */}
            <header className="space-y-2">
              <h1 className="text-2xl md:text-3xl text-center px-10 font-extrabold text-gray-900 pb-5">
                {item.header}
              </h1>
              <p className="text-sm text-gray-500 italic">{item.date}</p>
            </header>

            {/* Body text */}
            <section className="mt-4 text-base leading-relaxed text-gray-700 whitespace-pre-line">
              {item.text}
            </section>

            {/* Award list */}
            {item.points?.length > 0 && (
              <section className="mt-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Awards Received
                </h2>
                <ul className="mt-3 list-disc list-inside space-y-2 pl-2 text-gray-700">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Optional description */}
            {item.description && (
              <section className="mt-6">
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </section>
            )}

            {/* Cover image (optional for future) */}
            {item.image && (
              <figure className="my-4 w-full">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="md:w-[70%] rounded-xl object-cover shadow-sm"
                  loading="lazy"
                />
                {item.caption && (
                  <figcaption className="mt-2 text-xs text-gray-500">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Notice (if any) */}
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

export default EsquireData;
