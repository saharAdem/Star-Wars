export const getDataFromSessionStorage = (propertey: string): any | null => {
  try {
    if (typeof window !== 'undefined') {
      const data = sessionStorage.getItem(propertey);
      if (data) {
        return JSON.parse(data);
      }
    }
  } catch (error) {
    console.error('Error retrieving data from session storage:', error);
    return null;
  }
}