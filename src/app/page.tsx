import SearchInput from './components/ui/SearchInput'
import CharactersList from './components/characters/charactersList'
import { getCharacters } from '@/lib/api/characters'
import CreateSquadModal from './components/squads/createSquadModal'
import { getSpecies, getSpeciesPeople } from '@/lib/api/species'

export default async function Home() {
  const characters = await getCharacters()
  const species = await getSpecies()

  const speciesPeople: SpeciesCharacters = await getSpeciesPeople(species)

  return (
    <div className='container m-auto mt-9 w-5/6'>
      <section>
        <h1 className='text-center text-5xl font-bold m-5'>Start wars Challenge</h1>
        <div className='flex flex-row justify-around'>
          <SearchInput />
          <CreateSquadModal speciesPeople={speciesPeople}/>
        </div>
      </section>
      <section>
        <CharactersList characters={characters}/>
      </section>
    </div>
  )
}
