export const assertAxiosCall = (axiosInstance: any, method: 'get' | 'post' | 'put' | 'delete' | 'patch', endpoint: string, data?: any, headers: Record<string, string> = {}) => {
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
    expect(axiosInstance[method]).toHaveBeenCalledWith(endpoint, expect.objectContaining(mockOptions));
  } else {
    expect(axiosInstance[method]).toHaveBeenCalledWith(endpoint, data ? JSON.stringify(data) : undefined, expect.objectContaining(mockOptions));
  }
};
