import { MockAxiosInstance, resetAxiosMocks } from './axiosMock';

// Mock axios-retry
jest.mock('axios-retry', () => jest.fn());

// Create mock axios instance
export const mockAxiosInstance: MockAxiosInstance = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  patch: jest.fn(),
};

// Mock axios module
jest.mock('axios', () => {
  const actual = jest.requireActual('axios');
  return {
    __esModule: true,
    ...actual,
    default: {
      ...actual.default,
      create: jest.fn(() => mockAxiosInstance),
    },
    create: jest.fn(() => mockAxiosInstance),
  };
});

export { resetAxiosMocks };
