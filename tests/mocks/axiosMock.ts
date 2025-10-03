/**
 * Centralized Axios Mock Setup
 *
 * This module provides a reusable helper for resetting axios mocks in tests.
 * Due to Jest's hoisting behavior, the mock setup itself must be inlined in each test file.
 *
 * USAGE PATTERN:
 *
 * ```typescript
 * import { resetAxiosMocks } from './mocks/axiosMock';
 *
 * // Setup axios mocks
 * jest.mock('axios-retry', () => jest.fn());
 *
 * const mockAxiosInstance = {
 *   get: jest.fn(),
 *   post: jest.fn(),
 *   put: jest.fn(),
 *   delete: jest.fn(),
 *   patch: jest.fn(),
 * };
 *
 * jest.mock('axios', () => {
 *   const actual = jest.requireActual('axios');
 *   return {
 *     __esModule: true,
 *     ...actual,
 *     default: {
 *       ...actual.default,
 *       create: jest.fn(() => mockAxiosInstance),
 *     },
 *     create: jest.fn(() => mockAxiosInstance),
 *   };
 * });
 *
 * // In beforeEach:
 * beforeEach(() => {
 *   resetAxiosMocks(mockAxiosInstance);
 * });
 * ```
 */

export interface MockAxiosInstance {
  get: jest.Mock;
  post: jest.Mock;
  put: jest.Mock;
  delete: jest.Mock;
  patch: jest.Mock;
}

/**
 * Resets all mock axios methods and sets up default successful responses
 * Call this in beforeEach to ensure test isolation
 *
 * @param mockInstance - The mock axios instance to reset
 */
export function resetAxiosMocks(mockInstance: MockAxiosInstance): void {
  mockInstance.get.mockReset();
  mockInstance.post.mockReset();
  mockInstance.put.mockReset();
  mockInstance.delete.mockReset();
  mockInstance.patch.mockReset();

  // Set up default successful responses
  mockInstance.get.mockResolvedValue({ data: {} });
  mockInstance.post.mockResolvedValue({ data: {} });
  mockInstance.put.mockResolvedValue({ data: {} });
  mockInstance.delete.mockResolvedValue({ data: {} });
  mockInstance.patch.mockResolvedValue({ data: {} });
}
