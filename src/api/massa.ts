import {massas} from "../mock/massa";

export const getMassas = async (): Promise<any> => {
  return new Promise(resolve => setTimeout(() => {
    resolve(massas);
  }, 100));
}