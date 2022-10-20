import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{props.dadosPostagem.titulo}</TitleHeader>
      <Image src= {props.dadosPostagem.imagem} />
      <Description>{props.dadosPostagem.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
