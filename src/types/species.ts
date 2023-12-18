type Specie = {
  id: string, 
  name: string,
  classification: string, 
  designation: string, 
  averageHeight: number,
  averageLifespan: string, 
  language: string 
  eyeColors: string[],
  hairColors: string[],
  skinColors: string[],
  createdAt: string, 
  updatedAt: string,
  planetId: number 
  people: string[],
  films: string[], 
  homeworld: {}
};

type Species = Array<Specie>

type SpeciesCharacters = {
  [spiecieName: string]: Characters;
}