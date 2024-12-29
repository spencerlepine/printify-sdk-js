import axios from 'axios';

export const assertAxiosCall = (method: 'get' | 'post' | 'put' | 'delete' | 'patch', endpoint: string, data?: any, headers: Record<string, string> = {}) => {
  const mockOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer mockAccessToken`,
      ...headers,
    },
    baseURL: 'https://api.printify.com',
    timeout: 5000,
    method: method.toUpperCase(),
  };

  if (method === 'get' || method === 'delete') {
    expect(axios[method]).toHaveBeenCalledWith(endpoint, expect.objectContaining(mockOptions));
  } else {
    expect(axios[method]).toHaveBeenCalledWith(endpoint, data ? JSON.stringify(data) : undefined, expect.objectContaining(mockOptions));
  }
};
