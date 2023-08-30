import { RouteObject } from 'react-router-dom';

import { RoutesEnum } from '../../shared/enums/routes.enum';
import FirstScreen from './screens/FirstScreen';

export const firstScreenRoutes: RouteObject[] = [
  {
    path: RoutesEnum.ROOT,
    element: <FirstScreen />,
    errorElement: <div>Not found!</div>,
  },
];
