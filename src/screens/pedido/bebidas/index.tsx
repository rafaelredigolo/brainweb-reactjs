import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Form, NavContainer, Title} from "../tamanho/styles";
import {getBebidas} from "../../../api/bebida";
import appContext from "../../../context";

const Bebidas = (): JSX.Element => {
  const ctx = useContext(appContext)
  const [options, setOptions] = useState<Array<any>>([]);
  const [option, setOption] = useState<number>(1)
  useEffect(() => {
    listarOpcoes();
    return () => {}
  })
  const listarOpcoes = async () => {
    const data = await getBebidas();
    setOptions(data);
  }
  const adicionarItem = (item: any) => {
    setOption(parseInt(item.id))
    ctx.adicionarItem({ bebida: item })
  }
  return (
    <div>
      <Title>Selecione a bebida para acompanhar</Title>
      <Form>
        {options && options.map((value, index) => {
          return (
            <label key={index}>
              <input
                type="radio"
                name="bebida"
                value={value.id}
                checked={option === value.id}
                onChange={(e) => adicionarItem(value)}
              />
              {value.descricao} - R$ {value.valor}
            </label>
          )
        })}
      </Form>
      <NavContainer>
        <Link to='selecionar-sabores'>Voltar</Link>
        <Link to='finalizar'>Finalizar pedido</Link>
      </NavContainer>

    </div>
  );
}

export default Bebidas;