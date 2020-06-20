import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Form, Title, NavContainer} from "../tamanho/styles";
import {getSabores} from "../../../api/sabores";
import appContext from "../../../context";

const Sabores = (): JSX.Element => {
  const ctx = useContext(appContext)
  const [options, setOptions] = useState<Array<any>>([]);
  const [option, setOption] = useState<number>(1)
  useEffect(() => {
    listarOpcoes();
    return () => {}
  })
  const listarOpcoes = async () => {
    const data = await getSabores();
    setOptions(data);
  }
  const adicionarItem = (item: any) => {
    setOption(parseInt(item.id))
    ctx.adicionarItem({ sabor: item })
  }
  return (
    <div>
      <Title>Selecione o sabor da pizza</Title>
      <Form>
        {options && options.map((value, index) => {
          return (
            <label key={index}>
              <input
                type="radio"
                name="sabor"
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
        <Link to='selecionar-massa'>Voltar</Link>
        <Link to='selecionar-bebidas'>Selecionar bebidas</Link>
      </NavContainer>
    </div>
  );
}

export default Sabores;