import { RouteObject } from 'react-router-dom';

import { RoutesEnum } from '../../shared/enums/routes.enum';
import LoginScreen from './screens/Login';

export const loginRoutes: RouteObject[] = [
  {
    path: RoutesEnum.LOGIN,
    element: <LoginScreen />,
  },
];
