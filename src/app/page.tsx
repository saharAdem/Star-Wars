import SearchInput from './components/ui/SearchInput'
import CharactersList from './components/characters/charactersList'
import CreateSquadModal from './components/squads/createSquadModal'
import { getSpeciesPeople } from '@/lib/api/species'
// import { Suspense } from 'react';
// import { SkeletonCard } from "@/app/components/ui/skeletons";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const speciesPeople = await getSpeciesPeople();

  return (
    <div className='container flex flex-col items-center max-w-none'>
      <section className='w-3/4 flex flex-col justify-between'>
        <h1 className='text-center text-5xl font-bold text-white'>Star Wars</h1>
        <div className='flex flex-row justify-between mt-8 mb-10'>
          <div className='w-1/3'>
            <SearchInput />
          </div>
          <CreateSquadModal speciesPeople={speciesPeople}/>
        </div>
      </section>
      <section>
        {/* <Suspense key={query + currentPage} fallback={<SkeletonCard number={6}/>}> */}
          <CharactersList query={query} currentPage={currentPage}/>
        {/* </Suspense> */}
      </section>
    </div>
  )
}
