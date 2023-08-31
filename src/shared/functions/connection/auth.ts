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

export const verifyLoggedIn = async () => {
  const token = getAuthorizationToken();
  if (!token) {
    location.href = RoutesEnum.LOGIN;
  }

  await connectionAPIGet<UserType>(URL_USER).catch(() => {
    unsetAuthorizationToken();
    location.href = RoutesEnum.LOGIN;
  });

  return null;
};
