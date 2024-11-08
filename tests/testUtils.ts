import axios from 'axios';
import { BASE_URL } from '../src/constants';

export const assertAxiosCall = (method: 'get' | 'post' | 'put' | 'delete' | 'patch', endpoint: string, data?: any, headers: Record<string, string> = {}) => {
  const mockOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer mockAccessToken`,
      ...headers,
    },
    baseURL: BASE_URL,
    method: method.toUpperCase(),
  };

  if (method === 'get' || method === 'delete') {
    expect(axios[method]).toHaveBeenCalledWith(endpoint, expect.objectContaining(mockOptions));
  } else {
    expect(axios[method]).toHaveBeenCalledWith(endpoint, data ? JSON.stringify(data) : undefined, expect.objectContaining(mockOptions));
  }
};
