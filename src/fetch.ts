export type FetchDataFunc = (url: string, config?: RequestInit) => Promise<any>;

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
