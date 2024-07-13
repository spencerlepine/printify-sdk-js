export const fetchData = async (url: string, config?: RequestInit): Promise<any> => {
  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    // Handle error or rethrow it
    throw error;
  }
};
