import SearchInput from './components/ui/searchInput'
import Button from './components/ui/button'
import CharactersList from './components/characters/charactersList'
import { getCharacters } from '@/lib/api/characters'

export default async function Home() {
  const characters = await getCharacters()

  return (
    <div className='container m-auto mt-9 w-5/6'>
      <section>
        <h1 className='text-center text-5xl font-bold m-5'>Start wars Challenge</h1>
        <div className='flex flex-row justify-around'>
          <SearchInput />
          <Button>Create Squad</Button>
        </div>
      </section>
      <section>
        <CharactersList characters={characters}/>
      </section>
    </div>
  )
}
