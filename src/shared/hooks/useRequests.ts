import { useState } from 'react';

import { connectionAPIGet, connectionAPIPost } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

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

  const postRequest = async (url: string, body: unknown) => {
    setLoading(true);
    const returnData = await connectionAPIPost(url, body)
      .then((result) => {
        setNotification('Success!', 'success');
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      });

    setLoading(false);
    return returnData;
  };

  return { loading, getRequest, postRequest };
};
