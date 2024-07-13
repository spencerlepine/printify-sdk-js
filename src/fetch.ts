export type FetchDataFunc = (url: string, config?: RequestInit) => Promise<any>;

// Printify REST API (v1) Specification:
// header: `Authorization: Bearer ${PRINTIFY_API_TOKEN}`
// ContentType: application/json;charset=utf-8
// baseUrl: https://api.printify.com/v1/

class FetchUtil {
  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async fetchData(url: string, config: RequestInit = {}): Promise<any> {
    const defaultHeaders = {
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json; charset=utf-8',
    };

    const mergedConfig = {
      ...config,
      headers: {
        ...defaultHeaders,
        ...(config.headers || {}),
      },
    };

    try {
      const response = await fetch(url, mergedConfig);
      if (!response.ok) {
        throw new Error(`Printify SDK Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      // Rethrow the error for upstream code to handle
      throw error;
    }
  }
}

export default FetchUtil;
