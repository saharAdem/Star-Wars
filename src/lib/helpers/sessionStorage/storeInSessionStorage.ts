export const storeInSessionStorage = (propertey: string, data: any): void => {
  try {
    const dataString = JSON.stringify(data);
    sessionStorage.setItem(propertey, dataString);
  } catch (error) {
    console.error('Error storing in session storage:', error);
  }
};