"use client";

import { Input } from "./input";
import { Label } from "./label";

interface SearchCharactersProps {
  search: string;
  setSearch: (teamMembers: string) => void;
}

export const SearchCharacters = ({
  search,
  setSearch,
}: SearchCharactersProps) => {
  return (
    <div className="w-1/3 mx-auto p-5">
      <Label className="text-lg font-medium">
        Entrer le nom d&apos;un personnage:
      </Label>
      <Input
        placeholder="Son Goku (Ultra Instinct)"
        className="border border-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
