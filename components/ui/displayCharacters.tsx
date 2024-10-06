/* eslint-disable @next/next/no-img-element */
"use client";
import { Character } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface DisplayCharactersProps {
  characters: Character[];
  teamMembers: Character[];
  setTeamMembers: (teamMembers: Character[]) => void;
  search: string;
}

export const DisplayCharacters = ({
  characters,
  teamMembers,
  setTeamMembers,
  search,
}: DisplayCharactersProps) => {
  // Filtrer les personnages en fonction de la chaîne de recherche
  const filteredCharacters =
    search.length >= 2
      ? characters.filter((character) =>
          character.name.toLowerCase().includes(search.toLowerCase())
        )
      : characters;

  // Calculer le coût actuel de l'équipe
  const currentCost = teamMembers.reduce(
    (total, member) => total + member.cost,
    0
  );

  // Diviser les personnages en deux groupes
  const availableCharacters = filteredCharacters.filter(
    (character) =>
      !teamMembers.some((member) => member.name === character.name) &&
      currentCost + character.cost <= 15
  );
  const unavailableCharacters = filteredCharacters.filter(
    (character) =>
      teamMembers.some((member) => member.name === character.name) ||
      currentCost + character.cost > 15
  );

  return (
    <div>
      <Accordion
        type="multiple"
        defaultValue={["available", "unavailable"]}
        className="w-11/12 xl:w-3/4 mx-auto justify-center"
      >
        <AccordionItem value="available">
          <AccordionTrigger>Personnages disponibles</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-5 p-4">
              {availableCharacters.map((character) => (
                <HoverCard key={character.name} openDelay={400}>
                  <HoverCardTrigger>
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        if (teamMembers.length < 5) {
                          setTeamMembers([...teamMembers, character]);
                        }
                      }}
                    >
                      <img
                        src={character.img}
                        className="h-36 w-32 hover:transform hover:scale-110 transition-all card-clip"
                        alt="character"
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="flex flex-col items-center">
                      <p className="text-xl font-medium">{character.name}</p>
                      <p className="text-sm">{character.cost} points</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="unavailable">
          <AccordionTrigger>Personnages non disponibles</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-5 p-4">
              {unavailableCharacters.map((character) => (
                <HoverCard key={character.name} openDelay={400}>
                  <HoverCardTrigger>
                    <div className="cursor-not-allowed opacity-50">
                      <img
                        src={character.img}
                        className="h-28 w-24 hover:transform hover:scale-110 transition-all grayscale card-clip"
                        alt="character"
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="flex flex-col items-center">
                      <p className="text-xl font-medium">{character.name}</p>
                      <p className="text-sm">{character.cost} points</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
