import Link from "next/link"
import Card from "@/app/components/ui/card"

interface ICharactersListProps {
  characters: Characters
};

export default function CharactersList({ characters }: ICharactersListProps) {
  return <div className="flex flex-row flex-wrap container px-4 justify-center ">
    {
      characters.map((character) => {
        const { url } = character
        const userId = url.split('/').slice(-2, -1)[0]

        return (
          <Link 
            href={`/character/${userId}`}
            key={userId}
            className=" block m-3 w-2/5 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <Card title={character.name}>              
            </Card>
          </Link>
        )
      })
    }
  </div>
}

