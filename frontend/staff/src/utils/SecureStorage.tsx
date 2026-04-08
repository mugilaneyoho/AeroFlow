import secureLocalStorage from "react-secure-storage";

export const GetLocalStorage = (key: string) => {
  return secureLocalStorage.getItem(key);
};

export const SetLocalStorage = (key: string, data: any) => {
  secureLocalStorage.setItem(key, data);
};

export const RemoveLocalStorage = (key: string) => {
  secureLocalStorage.removeItem(key);
};

export const ClearLocalStorage = () => {
  secureLocalStorage.clear();
};