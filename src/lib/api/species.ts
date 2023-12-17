const speciesUrl = 'https://swapi.dev/api/species'

export const getSpecies = async (): Promise<Species> => {
  try {
    const response = await fetch(speciesUrl);
    const data = await response.json();
    const Species: Species = data.results

    if (!Species) {
      throw new Error("No results found");
    }

    return Species;
  } catch (error) {
    console.error("Error fetching characters", error);
    throw error;
  }
};

export const getSpeciesPeople = async (species: Species) => {
  const SpeciesWithCharacter: SpeciesCharacters = {};

  const fetchSpeciesData = async (specie: Specie) => {
    const characters = await Promise.all(
      specie.people.map(async (url) => {
        const response = await fetch(url);
        const characterData = await response.json();
        return characterData;
      })
    );
    SpeciesWithCharacter[specie.name] = characters;
  };

  for (const specie of species) {
    await fetchSpeciesData(specie);
  }

  return SpeciesWithCharacter;
};