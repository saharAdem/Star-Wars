import { getSpeciesPeople } from '@/lib/api/species'
import SquadsList from '@/app/components/squads/squadsList';

const Squads = async () => {
  const speciesPeople = await getSpeciesPeople()

  return <SquadsList speciesPeople={speciesPeople}/>

}

export default Squads