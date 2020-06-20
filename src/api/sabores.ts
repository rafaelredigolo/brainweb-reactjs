import {sabores} from "../mock/sabores";

export const getSabores = async (): Promise<any> => {
  return new Promise(resolve => setTimeout(() => {
    resolve(sabores);
  }, 100));
}