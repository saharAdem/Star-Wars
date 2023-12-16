type Film = {
  characters: string[] | Characters[];
  created: Date;
  director: string;
  edited: Date;
  episode_id: string;
  opening_crawl: string;
  planets: string[]
  producer: string;
  release_date: Date;
  species: string[] ;
  starships: string[]
  title: string;
  url: string;
  vehicles: string[]
}

type Films = Array<Film>