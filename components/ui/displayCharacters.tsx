/* eslint-disable @next/next/no-img-element */
import { Character } from "@/lib/utils";

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

  return (
    <div>
      <div className="grid grid-cols-12 gap-5">
        {filteredCharacters.map((character) => {
          const isInTeam = teamMembers.some(
            (member) => member.name === character.name
          );
          return (
            <div
              key={character.name}
              className={`cursor-pointer ${
                isInTeam ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => {
                if (!isInTeam && teamMembers.length < 5) {
                  setTeamMembers([...teamMembers, character]);
                }
              }}
            >
              <div key={character.name}>
                <img
                  src={character.img}
                  className={`h-28 w-24 hover:transform hover:scale-110 ${
                    isInTeam ? "grayscale" : ""
                  }`}
                  alt="character"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
