import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  
  const [dadosHeader, setDadosHeader]= useState({})

  const [dadosPostagem, setDadosPostagem] = useState({})

  
  


  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header
          dadosHeader={dadosHeader}
          />
{/* if ternario */}
          {pageFlow === 1 ? (
            <FormularioLogin 
            setDadosHeader={setDadosHeader}
            setPageFlow={setPageFlow} 
            />
          ) : (
            <FormularioPostagem 
            setDadosPostagem={setDadosPostagem}
            />
          )}
        </aside>
        <TelaDaPostagem 
        dadosPostagem= {dadosPostagem}
        />
      </Container>
    </>
  );
}

export default App;
