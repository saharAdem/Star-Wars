const speciesUrl = 'https://fe-case-study.vercel.app/api/data/species'

export const getSpecies = async (): Promise<Species> => {
  try {
    const response = await fetch(speciesUrl);
    const species: Species = await response.json();
    
    if (!species) {
      throw new Error("No results found");
    }

    return species;
  } catch (error) {
    console.error("Error fetching characters", error);
    throw error;
  }
};

export const getSpeciesPeople = async () => {
  const species = await getSpecies()

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