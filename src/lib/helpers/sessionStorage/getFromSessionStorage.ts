export const getDataFromSessionStorage = (propertey: string): any | null => {
  try {
    const data = sessionStorage.getItem(propertey);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error('Error retrieving data from session storage:', error);
    return null;
  }
}