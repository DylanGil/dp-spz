"use client";
import { CurrentTeam } from "@/components/ui/currentTeam";
import { DisplayCharacters } from "@/components/ui/displayCharacters";
import { SearchCharacters } from "@/components/ui/searchCharacters";
import { Character } from "@/lib/utils";
import { useState } from "react";

interface ClientWrapperProps {
  initialData: Character[];
}

export default function ClientWrapper({ initialData }: ClientWrapperProps) {
  const [teamMembers, setTeamMembers] = useState<Character[]>([]);
  const [search, setSearch] = useState("");

  return (
    <div className="w-3/4 mx-auto ">
      <CurrentTeam teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      <SearchCharacters search={search} setSearch={setSearch} />
      <DisplayCharacters
        characters={initialData}
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
        search={search}
      />
    </div>
  );
}
