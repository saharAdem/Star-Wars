export const getCharacters = async (): Promise<Characters> => {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    const characters: Character[] = data.results

    if (!characters) {
      throw new Error("No results found");
    }

    return characters;
  } catch (error) {
    console.error("Error fetching characters", error);
    throw error;
  }
};
