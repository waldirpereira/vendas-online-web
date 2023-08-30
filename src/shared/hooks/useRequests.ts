import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthType } from '../../modules/login/types/AuthType';
import { ERROR_AUTHENTICATION_FAILED } from '../constants/errorStatus';
import { URL_AUTH } from '../constants/url';
import { RoutesEnum } from '../enums/routes.enum';
import { setAuthorizationToken } from '../functions/connection/auth';
import { connectionAPIGet, connectionAPIPost } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification, setUser } = useGlobalContext();
  const navigate = useNavigate();

  const getRequest = async (url: string) => {
    setLoading(true);
    return await connectionAPIGet(url)
      .then((result) => {
        return result;
      })
      .catch(() => {
        setNotification('Authentication error!', 'error');
      });
  };

  const postRequest = async <T>(url: string, body: unknown): Promise<T | undefined> => {
    setLoading(true);
    const returnData = await connectionAPIPost<T>(url, body)
      .then((result) => {
        setNotification('Success!', 'success');
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      });

    setLoading(false);
    return returnData;
  };

  const authRequest = async (body: unknown): Promise<void> => {
    setLoading(true);
    await connectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setUser(result.user);
        setNotification('Logged in!', 'success');
        setAuthorizationToken(result.accessToken);
        navigate(RoutesEnum.PRODUCT);
      })
      .catch(() => {
        setNotification(ERROR_AUTHENTICATION_FAILED, 'error');
      });

    setLoading(false);
  };

  return { loading, authRequest, getRequest, postRequest };
};
