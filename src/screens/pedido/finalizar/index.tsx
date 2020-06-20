import React from 'react';
import {Link} from "react-router-dom";
import {Title} from "../tamanho/styles";

const Finalizar = (): JSX.Element => {
  return (
    <div>
      <Title>Finalizar pedido</Title>
      <Link to='/'>Concluir</Link>
    </div>
  );
}

export default Finalizar;