import styled from "styled-components";

export const ListaRecomendacao = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;
`;

export const ItemRecomendacao = styled.li`
  display: inline;
  padding: 10px 10px;
  background-color: #f5f5f5;
  margin-right: 10px;
  cursor: pointer;
  a {
    color: #f44336;
  }
`;

export const ContainerAviso = styled.div`
  background-color: #4db6ac;
  padding: 15px;
  p {
    color: #fff;
  }
`