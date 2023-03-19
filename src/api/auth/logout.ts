import { storageKeys } from "..";
import { removeLocalStorage } from "../../lib/localStorage";

export const logout = () => {
  removeLocalStorage(storageKeys.ACCESS);
  removeLocalStorage(storageKeys.REFRESH);
  removeLocalStorage(storageKeys.EXPIRY);
};
