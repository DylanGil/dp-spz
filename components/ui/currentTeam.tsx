/* eslint-disable @next/next/no-img-element */
"use client";

import { Character } from "@/lib/utils";
import { Card } from "./card";

interface CurrentTeamProps {
  teamMembers: Character[];
  setTeamMembers: (teamMembers: Character[]) => void;
}

export const CurrentTeam = ({
  teamMembers,
  setTeamMembers,
}: CurrentTeamProps) => {
  const teamSlots = Array(5).fill(null);
  teamMembers.forEach((member, index) => {
    teamSlots[index] = member;
  });

  return (
    <div className="flex justify-center gap-10 pt-5">
      {teamSlots.map((member, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => {
            if (member) {
              setTeamMembers(teamMembers.filter((m) => m.name !== member.name));
            }
          }}
        >
          {member ? (
            <div>
              <img
                src={member.img}
                className="hover:transform hover:scale-110 w-24 h-28"
                alt="character"
              />
            </div>
          ) : (
            <Card className="w-24 h-28" />
          )}
        </div>
      ))}
    </div>
  );
};
