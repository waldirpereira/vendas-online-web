import axios from 'axios';
import { useState } from 'react';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);

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
        alert('Error!');
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
        return result.data;
      })
      .catch(() => {
        alert('Error!');
      });

    setLoading(false);
    return returnData;
  };

  return { loading, getRequest, postRequest };
};
