import {bebidas} from "../mock/bebida";

export const getBebidas = async (): Promise<any> => {
  return new Promise(resolve => setTimeout(() => {
    resolve(bebidas);
  }, 100));
}