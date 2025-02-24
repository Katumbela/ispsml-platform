/* eslint-disable @typescript-eslint/no-explicit-any */
import type { apiResponse } from "./axiosHttpClient";

export interface HttpClient {
  get<T>(url: string, params?: any, headers?: any): Promise<apiResponse<T>>;
  post<T>(url: string, data: any, options?: { headers?: any }): Promise<apiResponse<T>>;
  put<T>(url: string, data: any, headers?: any): Promise<apiResponse<T>>;
  patch<T>(url: string, data: any, headers?: any): Promise<apiResponse<T>>;
  delete<T>(url: string, headers?: any): Promise<apiResponse<T>>;
}
