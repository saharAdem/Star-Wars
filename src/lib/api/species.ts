const speciesUrl = 'https://fe-case-study.vercel.app/api/data/species'

export const getSpecies = async (): Promise<Species> => {
  try {
    const response = await fetch(speciesUrl, {
      next: {
        revalidate: 120,
      },
    });
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

  const fetchCharacterData = async (url: string) => {
    const response = await fetch(url, {
      next: {
        revalidate: 120,
      },
    });
    return response.json();
  };

  const fetchSpeciesData = async (specie: Specie) => {
    const characters = await Promise.all(specie.people.map(fetchCharacterData));
    return { [specie.name]: characters };
  };

  const speciesWithCharacterPromises = species.map(fetchSpeciesData);
  const speciesWithCharacterArray = await Promise.all(speciesWithCharacterPromises);

  const SpeciesWithCharacter: SpeciesCharacters = speciesWithCharacterArray.reduce((result, item) => {
    return { ...result, ...item };
  }, {});

  return SpeciesWithCharacter;
};