export const storeInSessionStorage = (propertey: string, data: any): void => {
  try {
    if (typeof window !== 'undefined') {
      const dataString = JSON.stringify(data);
      sessionStorage.setItem(propertey, dataString);
    }
  } catch (error) {
    console.error('Error storing in session storage:', error);
  }
};