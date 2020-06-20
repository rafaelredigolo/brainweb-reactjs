import React from 'react';
import {Container, Item, Lista} from './styles';
import {Link} from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <Container>
      <Lista>
        <Item><Link to='/'>Meus pedidos</Link></Item>
        <Item><Link to='selecionar-tamanho'>Iniciar pedido</Link></Item>
      </Lista>
    </Container>
  );
}

export default Header;