/**
 * Shared Axios Mock Setup
 *
 * This file can be imported at the top of test files to set up axios mocking.
 * It must be imported BEFORE any other imports to ensure Jest hoisting works correctly.
 */

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

// Re-export the reset helper for convenience
export { resetAxiosMocks };
