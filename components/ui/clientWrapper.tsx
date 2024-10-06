"use client";
import { CurrentTeam } from "@/components/ui/currentTeam";
import { DisplayCharacters } from "@/components/ui/displayCharacters";
import { SearchCharacters } from "@/components/ui/searchCharacters";
import { Character } from "@/lib/utils";
import { useState, useEffect } from "react";
import * as React from "react";
import { useTheme } from "next-themes";

interface ClientWrapperProps {
  initialData: Character[];
}

export default function ClientWrapper({ initialData }: ClientWrapperProps) {
  const [teamMembers, setTeamMembers] = useState<Character[]>([]);
  const [search, setSearch] = useState("");
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
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
