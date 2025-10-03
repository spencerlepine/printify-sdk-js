/**
 * Centralized Axios Mock Setup
 *
 * This module provides a reusable helper for resetting axios mocks in tests.
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
