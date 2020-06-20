import React, { useContext, useEffect, useState } from 'react';
import appContext from "../../context";
import {getRecomendacoes} from "../../api/recomendacoes";
import {ListaRecomendacao, ItemRecomendacao, ContainerAviso} from "./styles";

const Home = (): JSX.Element => {
  const [recomendacoes, setRecomendacoes] = useState<Array<any>>([]);
  const [recomendacaoSelecionada, setRecomendacaoSelecionada] = useState<any>(null);
  const { pedidos } = useContext(appContext);
  const listarRecomendacoes = async () => {
    const data = await getRecomendacoes();
    setRecomendacoes(data)
  }
  useEffect(() => {
    listarRecomendacoes()
    return () => {}
  }, []);

  return (
    <div>
      <ListaRecomendacao>
        {recomendacoes.map((value, index) => {
          return (
            <ItemRecomendacao key={index} onClick={() => setRecomendacaoSelecionada(value)}>{value.descricao}</ItemRecomendacao>
          )
        })}
      </ListaRecomendacao>
      {recomendacaoSelecionada && (
        <ContainerAviso>
          <p>Parabéns, você ganhou {recomendacaoSelecionada.pontos} pontos</p>
        </ContainerAviso>
      )}
      {!pedidos.length && (
        <p>Nenhum pedido no momento</p>
      )}
      <p>{pedidos}</p>
    </div>
  );
}

export default Home;