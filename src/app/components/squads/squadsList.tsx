"use client"

import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { useEffect } from "react";

import type { RootState } from '@/app/store/store';
import Card from "@/app/components/ui/card";
import CharacterCard from "@/app/components/characters/characterCard";
import { SkeletonCard } from "@/app/components/ui/skeletons";

import CreateSquadModal from "@/app/components/squads/createSquadModal";

interface ISquadsList{
  speciesPeople: SpeciesCharacters
}

const SquadsList = ({ speciesPeople }: ISquadsList) => {
  const squads: Squads = useSelector((state: RootState) => state.squads);

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, []);


  return isLoading ? <SkeletonCard number={6} /> : (
    <div>
      <h1 className='text-center text-5xl font-bold mb-5 text-white'>{squads?.length > 0 ? 'Squads' : 'No Squads'}</h1>
      {squads?.length > 0 && <div className="flex flex-col flex-wrap items-center">
        {
          squads?.map((squad) => {
            const { name, characters, id } = squad
            return (
              <Card key={id} title={name} className="my-4">
                <div className="flex flex-wrap justify-center">
                  {
                    characters.map((character) => {
                      return (<div key={character.id}>
                        <CharacterCard character={character} className="hover:!cursor-auto" />
                      </div>)
                    })
                  }
                </div>
                <div className="w-full flex justify-end m-4 pr-10">

                  <CreateSquadModal editedSquadData={squad} speciesPeople={speciesPeople }/>

                </div>

              </Card>
            )
          })
        }
      </div>}
    </div>
  )
}

export default SquadsList