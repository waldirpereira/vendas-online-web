import type { Router as RemixRouter } from '@remix-run/router';
import { useEffect } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { firstScreenRoutes } from './modules/firstScreen/routes';
import { loginRoutes } from './modules/login/routes';
import { productScreenRoutes } from './modules/product/routes';
import { URL_USER } from './shared/constants/url';
import { MethodsEnum } from './shared/enums/methods.enum';
import { getAuthorizationToken, verifyLoggedIn } from './shared/functions/connection/auth';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { useNotification } from './shared/hooks/useNotification';
import { useRequests } from './shared/hooks/useRequests';

const publicRoutes: RouteObject[] = [...loginRoutes];
const authedRoutes: RouteObject[] = [...firstScreenRoutes, ...productScreenRoutes].map((route) => ({
  ...route,
  loader: verifyLoggedIn,
}));

const router: RemixRouter = createBrowserRouter([...publicRoutes, ...authedRoutes]);

function App() {
  const { contextHolder } = useNotification();
  const { request } = useRequests();
  const { setUser } = useGlobalContext();

  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      request(URL_USER, MethodsEnum.GET, setUser);
    }
  }, []);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
