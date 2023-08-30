import axios from 'axios';
import { useState } from 'react';

import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: 'get',
      url,
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        setNotification('Authentication error!', 'error');
      });
  };

  const postRequest = async (url: string, body: unknown) => {
    setLoading(true);
    const returnData = await axios({
      method: 'post',
      url,
      data: body,
    })
      .then((result) => {
        setNotification('Success!', 'success');
        return result.data;
      })
      .catch(() => {
        setNotification('Error!', 'error');
      });

    setLoading(false);
    return returnData;
  };

  return { loading, getRequest, postRequest };
};
