import React, { useState } from 'react';
import AppContext from "../context";

const Store = ({ children }: any) => {
  const adicionarItem = (item: any) => {
    setAppState({ ...appState, order: { ...item } })
    console.log(appState)
  }

  const initialState = {
    pedidos: [],
    order: {
      tamanho: {},
      massa: {},
      sabor: {},
      bebida: {}
    },
    adicionarItem
  }

  const [appState, setAppState] = useState(initialState);

  return (
    <AppContext.Provider value={appState}>
      {children}
    </AppContext.Provider>
  )
}

export default Store;