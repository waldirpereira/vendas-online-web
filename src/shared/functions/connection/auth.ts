import { UserType } from '../../../modules/login/types/UserType';
import { AUTHORIZATION_KEY } from '../../constants/authorization';
import { URL_USER } from '../../constants/url';
import { RoutesEnum } from '../../enums/routes.enum';
import { connectionAPIGet } from './connectionAPI';
import { getStorageItem, removeStorageItem, setStorageItem } from './storageProxy';

export const unsetAuthorizationToken = (): void => removeStorageItem(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token: string): void => {
  if (token) {
    setStorageItem(AUTHORIZATION_KEY, token);
  }
};

export const getAuthorizationToken = (): string | null => getStorageItem(AUTHORIZATION_KEY);

export const verifyLoggedIn = async (setUser: (user: UserType) => void, user?: UserType) => {
  const token = getAuthorizationToken();
  if (!token) {
    location.href = RoutesEnum.LOGIN;
  }

  if (!user) {
    await connectionAPIGet<UserType>(URL_USER)
      .then((returnedUser: UserType) => {
        setUser(returnedUser);
      })
      .catch(() => {
        unsetAuthorizationToken();
        location.href = RoutesEnum.LOGIN;
      });
  }
  return null;
};
