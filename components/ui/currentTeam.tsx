/* eslint-disable @next/next/no-img-element */
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import { Character } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

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
    <div className="flex flex-col items-center gap-5 pt-5 md:flex-row md:justify-center md:gap-10">
      <p className="my-auto text-xl font-medium">
        Coût d&apos;équipe:{" "}
        <span className="">
          {teamMembers.reduce((acc, member) => acc + member.cost, 0)}/15
        </span>
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        {teamSlots.map((member, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => {
              if (member) {
                setTeamMembers(
                  teamMembers.filter((m) => m.name !== member.name)
                );
              }
            }}
          >
            {member ? (
              <HoverCard openDelay={400}>
                <HoverCardTrigger>
                  <div>
                    <img
                      src={member.img}
                      className="hover:transform hover:scale-110 transition-all w-24 h-28 card-clip"
                      alt="character"
                    />
                    <HoverCardContent>
                      <div className="flex flex-col items-center">
                        <p className="text-xl font-medium">{member.name}</p>
                        <p className="text-sm">{member.cost} points</p>
                      </div>
                    </HoverCardContent>
                  </div>
                </HoverCardTrigger>
              </HoverCard>
            ) : (
              <Card className="w-24 h-28 bg-white/10 card-clip" />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="destructive"
                onClick={() => setTeamMembers([])}
              >
                <X className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Supprimer l&apos;équipe</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};
