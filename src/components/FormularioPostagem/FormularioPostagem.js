import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
    function postar () {
      props.setDadosPostagem({
        titulo: tituloPostagem,
        imagem: imagemPostagem,
        descricao: descricaoPostagem
      })

    }

    const [tituloPostagem, setTituloPostagem]= useState ("")
    const [imagemPostagem, setImagemPostagem]= useState ("")
    const [descricaoPostagem, setDescricaoPostagem]= useState ("")

    function onChangeTituloPostagem(e) {
      setTituloPostagem(e.target.value)
    }

    function onChangeImagemPostagem(e) {
      setImagemPostagem(e.target.value)
    }

    function onChangeDescricaoPostagem(e) {
      setDescricaoPostagem(e.target.value)
    }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input value= {tituloPostagem} onChange={onChangeTituloPostagem}   id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input value= {imagemPostagem} onChange= {onChangeImagemPostagem} id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input value= {descricaoPostagem} onChange= {onChangeDescricaoPostagem} id="descricao" />
        </StyledLabel>
        <SendButton onClick={postar}>Postar</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
