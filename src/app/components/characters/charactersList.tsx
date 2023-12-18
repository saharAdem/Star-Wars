import Link from "next/link"
import Card from "@/app/components/ui/card"

interface ICharactersListProps {
  characters: Characters
};

export default function CharactersList({ characters }: ICharactersListProps) {
  return <div className="flex flex-row flex-wrap container px-4 justify-center ">
    {
      characters.map((character) => {
        const {id, image, name} = character
        return (
          <Link 
            href={`/character/${id}`}
            key={id}
            className="m-3"
          >
            <Card title={name} imageData={{ url: image, width: 250, height: 350}}> 
            </Card>
          </Link>
        )
      })
    }
  </div>
}

