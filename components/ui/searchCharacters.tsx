"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface SearchCharactersProps {
  search: string;
  setSearch: (teamMembers: string) => void;
}

export const SearchCharacters = ({
  search,
  setSearch,
}: SearchCharactersProps) => {
  return (
    <div className="w-5/6 sm:w-2/3 xl:w-1/3 mx-auto p-5">
      <Label className="text-lg font-medium">
        Entrer le nom d&apos;un personnage:
      </Label>
      <div className="relative">
        <Input
          placeholder="Son Goku (Ultra Instinct)"
          className="border border-black w-full h-11"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <Button
            className="absolute rounded-full right-2 top-1/2 transform -translate-y-1/2 "
            variant="ghost"
            size="icon"
            onClick={() => setSearch("")}
          >
            {<X strokeWidth={1.5} />}
          </Button>
        )}
      </div>
    </div>
  );
};
