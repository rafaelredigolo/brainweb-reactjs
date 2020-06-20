import React from 'react';
import { Route } from 'react-router-dom';
import Header from "./components/header";
import Home from "./screens/home";
import Tamanho from "./screens/pedido/tamanho";
import Massa from "./screens/pedido/massa";
import Sabores from "./screens/pedido/sabores";
import Bebidas from "./screens/pedido/bebidas";
import Finalizar from "./screens/pedido/finalizar";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/selecionar-tamanho" component={Tamanho} />
      <Route exact path="/selecionar-massa" component={Massa} />
      <Route exact path="/selecionar-sabores" component={Sabores} />
      <Route exact path="/selecionar-bebidas" component={Bebidas} />
      <Route exact path="/finalizar" component={Finalizar} />
    </div>
  );
}

export default App;
