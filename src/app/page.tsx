import SearchInput from './components/ui/SearchInput'
import CharactersList from './components/characters/charactersList'
import { getCharacters } from '@/lib/api/characters'
import CreateSquadModal from './components/squads/createSquadModal'
import { getSpeciesPeople } from '@/lib/api/species'

export default async function Home() {
  const [characters, speciesPeople] = await Promise.all([getCharacters(), getSpeciesPeople()]);

  return (
    <div className='container flex flex-col items-center max-w-none bg-space-image'>
      <section className='w-3/4 flex flex-col justify-between'>
        <h1 className='text-center text-5xl font-bold text-white pt-24'>Star Wars</h1>
        <div className='flex flex-row justify-between mt-8 mb-10'>
          <div className='w-1/3'>
            <SearchInput />
          </div>
          <CreateSquadModal speciesPeople={speciesPeople}/>
        </div>
      </section>
      <section>
        <CharactersList characters={characters}/>
      </section>
    </div>
  )
}
