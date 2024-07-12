import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const fetchData = async (url: string, config?: AxiosRequestConfig): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.get(url, config);
    return response.data;
  } catch (error) {
    // Handle error or rethrow it
    throw error;
  }
};
