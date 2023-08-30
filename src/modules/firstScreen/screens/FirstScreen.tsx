import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER } from '../../../shared/constants/url';
import { RoutesEnum } from '../../../shared/enums/routes.enum';
import {
  getAuthorizationToken,
  unsetAuthorizationToken,
} from '../../../shared/functions/connection/auth';
import { connectionAPIGet } from '../../../shared/functions/connection/connectionAPI';

const FirstScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const verifyToken = async () => {
      const accessToken = getAuthorizationToken();
      if (accessToken) {
        await connectionAPIGet(URL_USER)
          .then(() => {
            navigate(RoutesEnum.PRODUCT);
          })
          .catch(() => {
            unsetAuthorizationToken();
            navigate(RoutesEnum.LOGIN);
          });
      } else {
        navigate(RoutesEnum.LOGIN);
      }
    };
    verifyToken();
  }, []);

  return <Spin />;
};

export default FirstScreen;
