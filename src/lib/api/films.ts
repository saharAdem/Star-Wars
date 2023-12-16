export const getFilmTitle = async (fetchUrl: string): Promise<string> => {
  try {
    const response = await fetch(fetchUrl);
    const film: Film = await response.json();

    if (!film) {
      throw new Error("No results found");
    }

    return film.title;
  } catch (error) {
    console.error("Error fetching characters", error);
    throw error;
  }
};