"use client"

import { useSelector } from "react-redux"

import type { RootState } from '@/app/store/store';
import Card from "@/app/components/ui/card";
import CharacterCard from "@/app/components/characters/characterCard";

const Squads = () => {
  const squads = useSelector((state: RootState) => state.squads);

  return (
    <div>
      <h1 className='text-center text-5xl font-bold m-5'>{squads.length > 0 ? 'Squads' : 'No Squads'}</h1>
        {squads.length > 0 && <div className="flex flex-wrap">
          {
            squads.map((squad, index) => {
              const { name, characters } = squad
              return (
                <Card key={index} title={name}>
                  <h4 className='text-2xl font-bold m-5'>Characters</h4>
                  {
                    characters.map((character, index) => {
                      return (<div key={index}>
                        <CharacterCard character={character} />
                      </div>)
                    })
                  }
                </Card>
              )
            })
          }
        </div>}
    </div>
  )
}

export default Squads