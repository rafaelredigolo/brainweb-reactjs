import {recomendacoes} from "../mock/recomendacoes";

export const getRecomendacoes = async (): Promise<any> => {
  return new Promise(resolve => setTimeout(() => {
    resolve(recomendacoes)
  }, 100));
}