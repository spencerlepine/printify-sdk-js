import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';

interface HttpConfig {
  accessToken: string;
  shopId?: string;
  enableLogging?: boolean;
  host?: string;
  axios?: AxiosInstance;
  timeout?: number;
}

/**
 * Error thrown for every failed Printify request.
 *
 * Printify explains *why* a request failed in the response body, so that body is
 * kept on the error (`status`, `code`, `errors`, `response`) and summarised in
 * `message` instead of being discarded.
 */
export class PrintifyError extends Error {
  status?: number;
  statusText?: string;
  url?: string;
  /** Printify's numeric error code (e.g. 8150 for a validation failure). */
  code?: string | number;
  /** Printify's `errors` object, typically `{ reason: string, code: number }`. */
  errors?: unknown;
  /** The raw, unmodified response body. */
  response?: unknown;

  constructor(message: string) {
    super(message);
    this.name = 'PrintifyError';
  }
}

const MAX_ERROR_DETAIL_LENGTH = 500;

/** Keeps error messages readable when the API answers with an HTML page or a long body. */
function truncate(detail: string): string {
  const collapsed = detail.replace(/\s+/g, ' ').trim();
  return collapsed.length > MAX_ERROR_DETAIL_LENGTH ? `${collapsed.slice(0, MAX_ERROR_DETAIL_LENGTH)}…` : collapsed;
}

/** Flattens a Printify error body into a single human-readable line. */
function describeApiError(data: unknown): string {
  if (typeof data === 'string') return truncate(data);
  if (!data || typeof data !== 'object') return '';

  const body = data as { message?: unknown; errors?: unknown };
  const parts: string[] = [];

  if (typeof body.message === 'string' && body.message) parts.push(body.message);

  const errors = body.errors;
  if (typeof errors === 'string' && errors) {
    parts.push(errors);
  } else if (errors && typeof errors === 'object') {
    const reason = (errors as { reason?: unknown }).reason;
    if (typeof reason === 'string' && reason) {
      parts.push(reason);
    } else {
      const fields = Object.entries(errors)
        .filter(([key]) => key !== 'code')
        .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : String(value)}`);
      if (fields.length) parts.push(fields.join('; '));
    }
  }

  return truncate(parts.join(' - '));
}

class HttpClient {
  private accessToken: string;
  shopId?: string;
  private host: string;
  private timeout: number;
  private enableLogging?: boolean;
  private baseUrl: string;
  protected axios: AxiosInstance;

  constructor(config: HttpConfig) {
    this.accessToken = config.accessToken;
    this.shopId = config.shopId;
    this.host = config.host || 'api.printify.com';
    this.timeout = config.timeout || 5000;
    this.enableLogging = config.enableLogging ?? true;
    this.baseUrl = `https://${this.host}`;
    this.axios = config.axios ?? Axios.create();
    axiosRetry(this.axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });
  }

  private logError(message: string) {
    if (this.enableLogging) {
      console.error(message);
    }
  }

  private logRequest(method: string, url: string) {
    if (this.enableLogging) {
      console.log(`Request: ${method.toUpperCase()} ${this.baseUrl}${url}`);
    }
  }

  async request<T = any>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
    };

    const requestConfig: AxiosRequestConfig = {
      ...config,
      method: config.method || 'GET',
      baseURL: this.baseUrl,
      timeout: this.timeout,
      headers: {
        ...defaultHeaders,
        ...(config.headers || {}),
      },
    };

    const method = (config.method || 'GET').toLowerCase();
    this.logRequest(method, url);

    try {
      let response;
      switch (method) {
        case 'post':
          response = await this.axios.post<T>(url, config.data, requestConfig);
          break;
        case 'put':
          response = await this.axios.put<T>(url, config.data, requestConfig);
          break;
        case 'delete':
          response = await this.axios.delete<T>(url, requestConfig);
          break;
        case 'get':
        default:
          response = await this.axios.get<T>(url, requestConfig);
          break;
      }
      return response.data;
    } catch (error: any) {
      const printifyError = new PrintifyError('Printify SDK Error');

      if ((error as AxiosError).isAxiosError) {
        const { status, statusText, data } = error.response ?? {};
        const requestUrl = `${this.baseUrl}${url}`;
        const details = describeApiError(data);

        printifyError.message = `Printify SDK: ${status} ${statusText} - Requested URL: ${requestUrl}${details ? ` - ${details}` : ''}`;
        printifyError.status = status;
        printifyError.statusText = statusText;
        printifyError.url = requestUrl;
        printifyError.code = data?.code ?? error.code;
        printifyError.errors = data?.errors;
        printifyError.response = data;
      }

      this.logError(printifyError.message);
      throw printifyError;
    }
  }
}

export default HttpClient;
