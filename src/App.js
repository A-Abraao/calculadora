import styled from 'styled-components';
import Calculadora from './components/calculadora';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/footer';
import './reset.css';

const AppContainer = styled.div`
  align-items: center;
  background: #27272A;
  color: white;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`

function App() {
  return (
    <AppContainer>
      <Calculadora />
      <Footer />
    </AppContainer>
  )
}

export default App;
