import { RouteObject } from 'react-router-dom';

import { RoutesEnum } from '../../shared/enums/routes.enum';
import FirstScreen from './screens/Home';
import PageNotFound from './screens/PageNotFound';

export const firstScreenRoutes: RouteObject[] = [
  {
    path: RoutesEnum.ROOT,
    element: <FirstScreen />,
    errorElement: <PageNotFound />,
  },
];
