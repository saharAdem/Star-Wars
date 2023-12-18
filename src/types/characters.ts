type Character = {

  id: number,
  name: string,
  birthYear: string,
  eyeColor: string,
  gender: string,
  hairColor: string,
  height: number,
  mass: number,
  skinColor: string,
  image: string,
  createdAt: string,
  updatedAt: string,
  planetId: number,
  speciesId: number
  starships: string[],
  vehicles: string[],
  films: string[],
  species: string[],  
  homeworld: {}
}

type Characters = Array<Character>