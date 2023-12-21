export const getCharacters = async (): Promise<Characters> => {
  try {
    const response = await fetch("https://fe-case-study.vercel.app/api/data/people", {
      next: {
        revalidate: 120,
      },
    });
    const characters = await response.json();

    if (!characters) {
      throw new Error("No results found");
    }

    return characters;
  } catch (error) {
    console.error("Error fetching characters", error);
    throw error;
  }
};

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const response = await fetch(`https://fe-case-study.vercel.app/api/data/people/${id}`, {
      next: {
        revalidate: 120,
      },
    });
    const character: Character = await response.json();

    if (!character) {
      throw new Error("No results found");
    }

    return character;
  } catch (error) {
    console.error("Error fetching characters", error);
    throw error;
  }
};
