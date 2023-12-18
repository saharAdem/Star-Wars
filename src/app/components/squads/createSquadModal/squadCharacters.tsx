import { useState } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation";

import { createSquad } from "@/app/store/features/squadsSlice";
import CharacterCard from "../../characters/characterCard"
import Button from "../../ui/button";

interface ISquadCharactersProps {
  speciesPeople: SpeciesCharacters,
  squadData: Squad,
  updateSquadData: (propertey: string, value: Characters) => void, 
  closeSquadModal: () => void
}

const SquadCharacters: React.FC<ISquadCharactersProps> = ({ speciesPeople, squadData, updateSquadData, closeSquadModal }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [selectedSpeice, setSelectedSpeice] = useState('Human')
  const [squadSpecies, setSquadSpecies] = useState<Array<string>>([])

  const changeSpiecieHandler = (specietype: string) => {
    setSelectedSpeice(specietype)
  }

  const handleSelectCharacter = (character: Character) => {
    const userSelectedCharacters = squadData.characters
    if (userSelectedCharacters.length < 6) {
      setSquadSpecies([...squadSpecies, selectedSpeice])
      updateSquadData('characters', [...userSelectedCharacters, character]);
    }
  };

  const handleCreateSquad = () => {
    dispatch(createSquad(squadData))
    router.push('/squads')
  }

  return (
    <div>
      <div>
        {
          speciesPeople && Object.keys(speciesPeople)?.map((specieName, index) => {
            return <button key={index} onClick={() => changeSpiecieHandler(specieName)} className={`inline-block mx-2 bg-gray-300 text-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>{specieName}</button>
          }

          )
        }
      </div>
      <div className="flex flex-wrap">
        {speciesPeople[selectedSpeice].map((character, index) => {
          const userSelectedCharacters = squadData.characters
          return (
            <CharacterCard
              key={character.id}
              character={character}
              isSelected={userSelectedCharacters.includes(character)}
              onSelect={userSelectedCharacters.length < squadData.teamNumber ? handleSelectCharacter : () => { }}
              isDisabled={userSelectedCharacters.length > squadData.teamNumber - 1 || (squadSpecies.includes(selectedSpeice))}
            />
          )
        }
        )}
      </div>
      <div className="flex justify-end">
        <Button 
          onClick={handleCreateSquad}
          isDisabled={squadData.characters.length < squadData.teamNumber}
        >Create</Button>
      </div>
    </div>
  )
}

export default SquadCharacters