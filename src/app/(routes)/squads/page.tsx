import { Metadata } from 'next';

import { getSpeciesPeople } from '@/lib/api/species'
import SquadsList from '@/app/components/squads/squadsList';

export const metadata: Metadata = {
  title: 'Squads',
};

const Squads = async () => {
  const speciesPeople = await getSpeciesPeople()

  return <></>
  // <SquadsList speciesPeople={speciesPeople}/>

}

export default Squads