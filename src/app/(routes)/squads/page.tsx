"use client"

import { useSelector } from "react-redux"

import type { RootState } from '@/app/store/store';
import Card from "@/app/components/ui/card";
import CharacterCard from "@/app/components/characters/characterCard";
import { getDataFromSessionStorage } from "@/lib/helpers/sessionStorage/getFromSessionStorage";

const Squads = () => {
  // const squads = useSelector((state: RootState) => state.squads);
  const squads: Squads = getDataFromSessionStorage('squads')
  return (
    <div>
      <h1 className='text-center text-5xl font-bold mb-5 text-white'>{squads?.length > 0 ? 'Squads' : 'No Squads'}</h1>
        {squads?.length > 0 && <div className="flex flex-col flex-wrap">
          {
            squads?.map((squad) => {
              const { name, characters, id } = squad
              return (
                <Card key={id} title={name} className="my-4">
                  <div className="flex flex-wrap justify-center">
                    {
                      characters.map((character) => {
                        return (<div key={character.id}>
                          <CharacterCard character={character} />
                        </div>)
                      })
                    }
                  </div>
                </Card>
              )
            })
          }
        </div>}
    </div>
  )
}

export default Squads