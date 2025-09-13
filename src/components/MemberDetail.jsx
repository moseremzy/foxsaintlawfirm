import React from "react";
import { Link } from "react-router-dom";

const MemberDetail = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <main className="w-full bg-white text-indigo-950 p-6 md:p-12">
      <section className="flex flex-col md:flex-row gap-10">
        {/* Left Side: Image + Role */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 md:px-10">
          <img
            src={member.image}
            alt={member.name}
            className="h-72 w-64 rounded-lg shadow-lg"
          />
          <p className="mt-4 text-lg font-semibold">{member.role}</p>
        </div>

        {/* Right Side: Details */}
        <div className="flex flex-col flex-1 gap-1">
          <h1 className="text-3xl font-bold">{member.name}</h1>

          <div className="flex flex-row gap-4 text-sm">
            {member.linkedin && (
              <Link to={member.linkedin} target="_blank" className="text-blue-600 underline">
                View LinkedIn Profile
              </Link>
            )}
            {member.email && (
              <a href={`mailto:${member.email}`} className="text-blue-600 underline">
                Send Email
              </a>
            )}
          </div>

          {/* Sections */}
          {member.details &&
            Object.entries(member.details).map(([section, content], index) => (
              <details key={index} className="border rounded-lg">
                <summary className="bg-indigo-950 text-white font-semibold px-4 py-2 cursor-pointer">
                  {section}
                </summary>
                <div className="p-7 text-gray-700 whitespace-pre-line leading-relaxed">{content}</div>
              </details>
            ))}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="mt-4 bg-indigo-950 text-white px-2 py-1 rounded-lg w-fit"
          >
            Back to Team
          </button>
        </div>
      </section>
    </main>
  );
};

export default MemberDetail;
