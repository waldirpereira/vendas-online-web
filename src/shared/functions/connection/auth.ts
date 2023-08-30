import { AUTHORIZATION_KEY } from '../../constants/authorization';
import { getStorageItem, removeStorageItem, setStorageItem } from './storageProxy';

export const unsetAuthorizationToken = (): void => removeStorageItem(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token: string): void => {
  if (token) {
    setStorageItem(AUTHORIZATION_KEY, token);
  }
};

export const getAuthorizationToken = (): string | null => getStorageItem(AUTHORIZATION_KEY);
