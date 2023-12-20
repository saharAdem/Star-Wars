import { useState } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

import { storeInSessionStorage } from '@/lib/helpers/sessionStorage/storeInSessionStorage';
import { getDataFromSessionStorage } from "@/lib/helpers/sessionStorage/getFromSessionStorage";
import { createSquad, editSquad } from "@/app/store/features/squadsSlice";
import CharacterCard from "../../characters/characterCard"
import Button from "../../ui/button";

interface ISquadCharactersProps {
  speciesPeople: SpeciesCharacters,
  squadData: Squad,
  updateSquadData: (propertey: string, value: Characters | string[]) => void,
  closeSquadModal: () => void,
  editedSquadData?: Squad
}

const SquadCharacters: React.FC<ISquadCharactersProps> = ({ speciesPeople, squadData, updateSquadData, closeSquadModal, editedSquadData }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [selectedSpeice, setSelectedSpeice] = useState(squadData.species.length ? squadData.species[0] : 'Human')

  const changeSpiecieHandler = (specietype: string) => {
    setSelectedSpeice(specietype)
  }

  const isCharacterSelected = (characters: Characters, charId: number) => {
    return characters.some(selectedCharacter => selectedCharacter.id === charId);
  }

  const handleSelectCharacter = (character: Character) => {
    const { characters: userSelectedCharacters, species: selectedSpecies } = squadData

    const isUserSelected = isCharacterSelected(userSelectedCharacters, character.id)
    if (isUserSelected) {
      const updatedCharacters = userSelectedCharacters?.filter(selectedCharacter => selectedCharacter.id !== character.id)
      const updatedSquadSpecies = selectedSpecies.filter(specie => specie !== selectedSpeice)
      updateSquadData('characters', updatedCharacters);
      updateSquadData('species', updatedSquadSpecies);
    } else {
      if (userSelectedCharacters.length < 6) {

        updateSquadData('species', [...selectedSpecies, selectedSpeice]);
        updateSquadData('characters', [...userSelectedCharacters, character]);

      }
    }
  }


  const handleCreateSquad = () => {
    editedSquadData ? dispatch(editSquad(squadData)) : dispatch(createSquad(squadData))
    closeSquadModal()
    router.push('/squads')
  }

  const isContainSelectedCharaters = () => {
    return squadData.characters.some(squadCharacter => speciesPeople[selectedSpeice].some(character => character.id === squadCharacter.id));
  }

  return (
    <div className="flex flex-col mb-10">
      <div>
        {
          speciesPeople && Object.keys(speciesPeople)?.map((specieName, index) => {
            return <button key={index} onClick={() => changeSpiecieHandler(specieName)} className={`inline-block mx-2 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${specieName === selectedSpeice ? 'bg-blue-500' : squadData.species.includes(specieName) ? 'bg-green-700' : 'bg-gray-500'} text-white`}>{specieName}</button>
          }

          )
        }
      </div>
      <div className="flex flex-wrap my-1 justify-center">
        {speciesPeople[selectedSpeice]?.length ? speciesPeople[selectedSpeice]?.map((character) => {
          const { species: selectedSpecies } = squadData
          const userSelectedCharacters: Characters = squadData.characters
          const isSelectedCharacter = isCharacterSelected(userSelectedCharacters, character.id)
          return (
            <div key={character.id}>
              <CharacterCard
                key={character.id}
                character={character}
                isSelected={isSelectedCharacter}
                onSelect={handleSelectCharacter}
                isDisabled={selectedSpecies.includes(selectedSpeice) && !isSelectedCharacter}
                className="w-48 h-80"
              />
            </div>
          )
        }
        ) : <h1 className='text-center align-middle text-xl font-bold m-10'>No Characters</h1>
        }
      </div>
      <Button
        onClick={handleCreateSquad}
        isDisabled={!(squadData.characters.length === squadData.teamNumber)}
      >{editedSquadData ? 'Edit' : 'Create'}</Button>
    </div>
  )
}

export default SquadCharacters