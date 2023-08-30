import axios from 'axios';

import {
  ERROR_ACCESS_DENIED,
  ERROR_CONNECTION,
  ERROR_NOT_FOUND,
} from '../../constants/errorStatus';
import { MethodsEnum } from '../../enums/methods.enum';

class ConnectionAPI {
  static async call<T>(url: string, method: string, body?: unknown): Promise<T> {
    switch (method) {
      case MethodsEnum.POST:
        return (await axios.post<T>(url, body)).data;
      case MethodsEnum.DELETE:
        return (await axios.delete<T>(url)).data;
      case MethodsEnum.PATCH:
        return (await axios.patch<T>(url, body)).data;
      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body)).data;
      case MethodsEnum.GET:
      default:
        return (await axios.get<T>(url)).data;
    }
  }

  static async connect<T>(url: string, method: string, body?: unknown): Promise<T> {
    return ConnectionAPI.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DENIED);
          case 404:
            throw new Error(ERROR_NOT_FOUND);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_CONNECTION);
    });
  }
}

export const connectionAPIGet = async <T>(url: string): Promise<T> =>
  ConnectionAPI.connect<T>(url, MethodsEnum.GET);
export const connectionAPIPost = async <T>(url: string, body: unknown): Promise<T> =>
  ConnectionAPI.connect<T>(url, MethodsEnum.POST, body);
export const connectionAPIDelete = async <T>(url: string): Promise<T> =>
  ConnectionAPI.connect<T>(url, MethodsEnum.DELETE);
export const connectionAPIPatch = async <T>(url: string, body: unknown): Promise<T> =>
  ConnectionAPI.connect<T>(url, MethodsEnum.PATCH, body);
export const connectionAPIPut = async <T>(url: string, body: unknown): Promise<T> =>
  ConnectionAPI.connect<T>(url, MethodsEnum.PUT, body);
