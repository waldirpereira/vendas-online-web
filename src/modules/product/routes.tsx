import { RouteObject } from 'react-router-dom';

import { RoutesEnum } from '../../shared/enums/routes.enum';
import Product from './screens/Product';

export const productScreenRoutes: RouteObject[] = [
  {
    path: RoutesEnum.PRODUCT,
    element: <Product />,
  },
];
