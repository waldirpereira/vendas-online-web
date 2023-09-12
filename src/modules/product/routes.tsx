import { RouteObject } from 'react-router-dom';

import { RoutesEnum } from '../../shared/enums/routes.enum';
import Product from './screens/Product';
import ProductInsert from './screens/ProductInsert';

export const productScreenRoutes: RouteObject[] = [
  {
    path: RoutesEnum.PRODUCT,
    element: <Product />,
  },
  {
    path: RoutesEnum.PRODUCT_INSERT,
    element: <ProductInsert />,
  },
];
