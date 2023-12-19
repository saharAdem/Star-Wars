import { useState } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

import { storeInSessionStorage } from '@/lib/helpers/sessionStorage/storeInSessionStorage';
import { getDataFromSessionStorage } from "@/lib/helpers/sessionStorage/getFromSessionStorage";
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
    // dispatch(createSquad(squadData))
    const squads: Squads = getDataFromSessionStorage('squads') || []
    storeInSessionStorage('squads', [...squads, {...squadData, id: uuidv4()}]);
    router.push('/squads')
  }

  return (
    <div className="flex flex-col mb-10">
      <div>
        {
          speciesPeople && Object.keys(speciesPeople)?.map((specieName, index) => {
            return <button key={index} onClick={() => changeSpiecieHandler(specieName)} className={`inline-block mx-2 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${specieName === selectedSpeice ? 'bg-blue-500' : 'bg-gray-500'} text-white`}>{specieName}</button>
          }

          )
        }
      </div>
      <div className="flex flex-wrap my-1 justify-center h-full">
        {speciesPeople[selectedSpeice].map((character) => {
          const userSelectedCharacters = squadData.characters
          return (
            <div key={character.id}>
            <CharacterCard
              key={character.id}
              character={character}
              isSelected={userSelectedCharacters.includes(character)}
              onSelect={userSelectedCharacters.length < squadData.teamNumber ? handleSelectCharacter : () => { }}
              isDisabled={userSelectedCharacters.length > squadData.teamNumber - 1 || (squadSpecies.includes(selectedSpeice))}
              className="w-48 h-80"
            />
            </div>
          )
        }
        )}
      </div>
      <Button
        onClick={handleCreateSquad}
        isDisabled={squadData.characters.length < squadData.teamNumber}
      >Create</Button>
    </div>
  )
}

export default SquadCharacters