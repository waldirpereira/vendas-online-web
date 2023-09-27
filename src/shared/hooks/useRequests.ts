import { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { AuthType } from '../../modules/login/types/AuthType';
import { ERROR_AUTHENTICATION_FAILED } from '../constants/errorStatus';
import { URL_AUTH } from '../constants/url';
import { RoutesEnum } from '../enums/routes.enum';
import { setAuthorizationToken } from '../functions/connection/auth';
import {
  ConnectionAPI,
  connectionAPIPost,
  MethodType,
} from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification, setUser } = useGlobalContext();

  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: unknown,
  ): Promise<T | undefined> => {
    setLoading(true);

    const returnObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((result: T) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      });

    setLoading(false);

    return returnObject;
  };

  const authRequest = async (body: unknown): Promise<void> => {
    setLoading(true);
    await connectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setUser(result.user);
        setNotification('Logged in!', 'success');
        setAuthorizationToken(result.accessToken);
        location.href = '/';
      })
      .catch(() => {
        setNotification(ERROR_AUTHENTICATION_FAILED, 'error');
      });

    setLoading(false);
  };

  return { loading, authRequest, request };
};
