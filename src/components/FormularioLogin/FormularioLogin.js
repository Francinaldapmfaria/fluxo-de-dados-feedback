import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";
import { useState } from "react";

const FormularioLogin = (props) => {
  const login = () => {
    props.setPageFlow(2);
    props.setDadosHeader({
      nomeHeader:nome, 
      fotoHeader:foto
    })
  };

  const [foto, setFoto]= useState("")
  const [nome, setNome]= useState("")

  function onChangeNome(e) {
    setNome(e.target.value)
  }

  function onChangeFoto(e) {
    setFoto(e.target.value)
  }



  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input value={nome} onChange={onChangeNome} type={"text"} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input value={foto} onChange={onChangeFoto} type={"text"} />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
