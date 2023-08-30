export const setStorageItem = (key: string, value: string): void =>
  localStorage.setItem(key, value);

export const removeStorageItem = (key: string): void => localStorage.removeItem(key);

export const getStorageItem = (key: string): string | null => localStorage.getItem(key);
