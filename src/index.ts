import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// header: `Authorization: Bearer ${PRINTIFY_API_TOKEN}`
// ContentType: application/json;charset=utf-8
// baseUrl: https://api.printify.com/v1/

export const fetchData = async (url: string, config?: AxiosRequestConfig): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.get(url, config);
    return response.data;
  } catch (error) {
    // Handle error or rethrow it
    throw error;
  }
};
