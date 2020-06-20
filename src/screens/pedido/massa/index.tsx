import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Form, Title, NavContainer} from "../tamanho/styles";
import {getMassas} from "../../../api/massa";
import appContext from "../../../context";

const Massa = (): JSX.Element => {
  const ctx = useContext(appContext)
  const [options, setOptions] = useState<Array<any>>([]);
  const [option, setOption] = useState<number>(1)
  useEffect(() => {
    listarOpcoes();
    return () => {}
  })
  const listarOpcoes = async () => {
    const data = await getMassas();
    setOptions(data);
  }
  const adicionarItem = (item: any) => {
    setOption(parseInt(item.id))
    ctx.adicionarItem({ massa: item })
  }
  return (
    <div>
      <Title>Selecione a massa da pizza</Title>
      <Form>
        {options && options.map((value, index) => {
          return (
            <label key={index}>
              <input
                type="radio"
                name="massa"
                value={value.id}
                checked={option === value.id}
                onChange={(e) => adicionarItem(value)}
              />
              {value.descricao}
            </label>
          )
        })}
      </Form>
      <NavContainer>
        <Link to='selecionar-tamanho'>Voltar</Link>
        <Link to='selecionar-sabores'>Selecionar os sabores</Link>
      </NavContainer>

    </div>
  );
}

export default Massa;