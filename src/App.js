import styled from 'styled-components';
import Calculadora from './components/calculadora';
import './reset.css';

const AppContainer = styled.div`
  align-items: center;
  background: #27272A;
  color: white;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  height: 100vh;
  justify-content: center;
`

function App() {
  return (
    <AppContainer>
      <Calculadora />
    </AppContainer>
  )
}

export default App;
