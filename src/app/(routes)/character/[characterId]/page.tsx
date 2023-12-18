import { getCharacter } from "@/lib/api/characters"
import Card from "@/app/components/ui/card"
import CharacterDescriptionItem from "@/app/components/characters/characterDescriptionItem"
import { getFilmTitle } from "@/lib/api/films"

const CharacterPage = async ({ params }: { params: { characterId: string } }) => {
  const character = await getCharacter(params.characterId)
  const { name, height, birthYear, mass } = character

  const getUserFilms = async () => {
    const userFilms = await Promise.all(character.films.map(url => getFilmTitle(url)));
    return userFilms
  }
  const filmsTitles = await getUserFilms()


  return (
    <div>
      <h5 className='text-center text-5xl font-bold m-5'> {name}
      </h5>
      <div className="block w-4/5 m-auto rounded-lg p-6 ">
        <Card title=''>
          <CharacterDescriptionItem propertey="Mass" value={mass}/>
          <CharacterDescriptionItem propertey="Birthdate" value={birthYear} />
          <CharacterDescriptionItem propertey="Height" value={height} />
          <CharacterDescriptionItem propertey="Films">
            {
              filmsTitles.map((title, index) => (
                <span key={index} className="inline-block mx-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{title}</span>
              ))
            }
          </CharacterDescriptionItem>

        </Card>
      </div>
    </div>
  )
}

export default CharacterPage