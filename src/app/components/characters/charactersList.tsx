import Link from "next/link"

import Card from "@/app/components/ui/card"
import Pagination from "../pagination/pagination"
import { getCharacters } from '@/lib/api/characters'

interface ICharactersListProps {
  currentPage: number,
  query: string
};

export default async function CharactersList({ currentPage, query }: ICharactersListProps) {
  let characters = await getCharacters()
  const elementsperPage = 15

  if (query) {
    characters = characters.filter((character) =>
      character.name.toLowerCase().includes(query.toLowerCase()))
  }

  const start = (Number(currentPage) - 1) * Number(elementsperPage)
  const end = start + Number(elementsperPage)
  const filteredCharacters = characters.slice(start, end)


  return <div >
    {filteredCharacters.length ? <div>
      <Pagination hasNextPage={end < characters.length}
        hasPrevPage={start > 0}
        per_page={elementsperPage}
        elementsNumber={characters.length}
      />
      <div className="flex flex-row flex-wrap justify-center ">

        {
          filteredCharacters.map((character) => {
            const { id, image, name } = character
            return (
              <Link
                href={`/character/${id}`}
                key={id}
                className="m-3"
              >
                <Card title={name} imageData={{ url: image, width: 250, height: 350 }}>
                </Card>
              </Link>
            )
          })
        }
      </div>
    </div> : <div>
        <h1 className='text-center align-middle text-xl  mt-28 text-white'>No Characters <br /><span className="font-bold underline">{query}</span> {"isn't"} exit</h1>
    </div>}

  </div>
}

