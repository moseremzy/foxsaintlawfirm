import React, { useState } from "react";
import { TeamInfo } from "../constants";
import MemberDetails from "./MemberDetail";

const TeamData = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <main className="w-full">
      {!selectedMember ? (
        <section className="bg-white text-indigo-950 flex flex-col gap-10">
          {TeamInfo.map((item, index) => (
            <section key={index} className="md:p-7 md:px-20 flex flex-col gap-10">
              <h2 className="text-2xl font-semibold flex justify-center md:justify-start">
                {item.section}
              </h2>
              <section className="px-5 py-7 gap-5 grid grid-cols-2 lg:grid-cols-4 md:gap-9">
                {item.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                  >
                    <img
                      src={member.image}
                      alt={item.section}
                      className="h-60 w-72 rounded-lg"
                    />
                    <h3 className="mt-2 font-medium">{member.name}</h3>
                    <p className="text-sm text-blue-950">{member.role}</p>
                  </div>
                ))}
              </section>
            </section>
          ))}
        </section>
      ) : (
        <MemberDetails member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </main>
  );
};

export default TeamData;
