/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpClient } from './httpClient';
import Cookies from 'js-cookie';
import * as dotenv from 'dotenv';
import { env } from '@/infra/env';
dotenv.config();

export interface apiResponse<T> {
  status: number;
  data: T;
}

class AxiosHttpClient implements HttpClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: env.API_URL,
    });

    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = this.getAuthorizationToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // this.axiosInstance.interceptors.response.use(
    //   (response) => response,
    //   (error) => {
    //     if (error.response?.status === 401) {
    //       Cookies.remove('account');
    //       window.location.href = '/challenge';
    //     }
    //     return Promise.reject(error);
    //   }
    // );
  }

  private getAuthorizationToken(): string | null {
    const account = Cookies.get('account');
    if (account) {
      try {
        const parsedAccount = JSON.parse(account);
        return parsedAccount.token || parsedAccount.access_token || null;
      } catch (error) {
        console.error('Erro ao parsear o cookie:', error);
        return null;
      }
    }
    return null;
  }


  async get<T>(url: string, params?: any, headers?: any): Promise<apiResponse<T>> {
    try {
      const config: AxiosRequestConfig = { params };
      if (headers) {
        config.headers = { ...config.headers, ...headers };
      }
      const response: any = await this.axiosInstance.get<T>(url, config);
      return { status: response.status, data: response.data.data };
    } catch (error: any) {
      console.error('Erro na requisição GET:', error);
      return { status: 400, data: error.message };
    }
  }

  async post<T>(url: string, data: any, options?: { headers?: any }): Promise<apiResponse<T>> {
    try {
      const config: AxiosRequestConfig = {};
      if (options?.headers) {
        config.headers = { ...config.headers, ...options.headers };
      }
      const response: any = await this.axiosInstance.post<T>(url, data, config);
      return { status: response.status, data: response.data.data };
    } catch (error: any) {
      console.error('Erro na requisição POST:', error);
      return { status: 400, data: error.message };
    }
  }

  async put<T>(url: string, data?: any, headers?: any): Promise<apiResponse<T>> {
    try {
      const config: AxiosRequestConfig = {};
      if (headers) {
        config.headers = { ...config.headers, ...headers };
      }
      const response: any = await this.axiosInstance.put<T>(url, data, config);
      return { status: response.status, data: response.data.data };
    } catch (error) {
      console.error('Erro na requisição PUT:', error);
      this.handleError(error);
      throw new Error('Failed to update data');
    }
  }

  async patch<T>(url: string, data?: any, headers?: any): Promise<apiResponse<T>> {
    try {
      const config: AxiosRequestConfig = {};
      if (headers) {
        config.headers = { ...config.headers, ...headers };
      }
      const response: any = await this.axiosInstance.patch<T>(url, data, config);
      return { status: response.status, data: response.data.data };
    } catch (error) {
      console.error('Erro na requisição PATCH:', error);
      this.handleError(error);
      throw new Error('Failed to update data');
    }
  }

  async delete<T>(url: string): Promise<apiResponse<T>> {
    try {
      console.log("Deletando dados...");
      const response: any = await this.axiosInstance.delete<T>(url);
      return { status: response.status, data: response.data.data };
    } catch (error) {
      console.error('Erro na requisição DELETE:', error);
      this.handleError(error);
      throw new Error('Failed to delete data');
    }
  }

  private handleError(error: any) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;
      console.error(`Erro ${status}:`, message);
    } else {
      console.error('Erro inesperado:', error);
    }
  }
}

export default AxiosHttpClient;
