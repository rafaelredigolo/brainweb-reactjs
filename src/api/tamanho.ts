import {tamanhos} from "../mock/tamanho";

export const getTamanhos = async (): Promise<any> => {
  return new Promise(resolve => setTimeout(() => {
    resolve(tamanhos);
  }, 100));
}