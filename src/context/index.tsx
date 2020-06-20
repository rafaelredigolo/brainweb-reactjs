import React from "react";
const initialState = {
  pedidos: [],
  order: {
    tamanho: {},
    massa: {},
    sabor: {},
    bebida: {}
  },
  adicionarItem: (e: any) => {}
}
const appContext = React.createContext(initialState);

export default  appContext;