import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Title, Form} from "./styles";
import {getTamanhos} from "../../../api/tamanho";
import appContext from "../../../context";

const Tamanho = (): JSX.Element => {
  const ctx = useContext(appContext)
  const [options, setOptions] = useState<Array<any>>([]);
  const [option, setOption] = useState<number>(1)
  useEffect(() => {
    listarOpcoes();
    return () => {}
  })
  const listarOpcoes = async () => {
    const data = await getTamanhos();
    setOptions(data);
  }
  const adicionarItem = (item: any) => {
    setOption(parseInt(item.id))
    ctx.adicionarItem({ tamanho: item })
  }
  return (
    <div>
      <Title>Selecione o tamanho da pizza</Title>
      <Form>
        {options && options.map((value, index) => {
          return (
            <label key={index}>
              <input
                type="radio"
                name="tamanho"
                value={value.id}
                checked={option === value.id}
                onChange={(e) => adicionarItem(value)}
              />
              {value.descricao}
            </label>
          )
        })}
      </Form>

      <Link to='selecionar-massa'>Selecionar o tipo de massa</Link>
    </div>
  );
}

export default Tamanho;