import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '../../../shared/enums/routes.enum';
import { getAuthorizationToken } from '../../../shared/functions/connection/auth';

const FirstScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = getAuthorizationToken();
    if (accessToken) {
      navigate(RoutesEnum.PRODUCT);
    } else {
      navigate(RoutesEnum.LOGIN);
    }
  }, []);

  return <Spin />;
};

export default FirstScreen;
