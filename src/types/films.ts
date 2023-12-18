type Film = {
  id: string, 
  title: string,
  episodeId: number,
  openingCrawl: string,
  director: string, 
  producer: string,
  releaseDate: string,
  createdAt: string,
  updatedAt: string,
  species: string[],
  starships: string[],
  vehicles: string[],
  characters: string[],
  planets: string[]
}

type Films = Array<Film>