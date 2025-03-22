import styled from 'styled-components';
import Calculadora from './components/main';

const AppContainer = styled.div`

`

function App() {
  return (
    <AppContainer>
      <div className="App">
        <Calculadora />
      </div>
    </AppContainer>
  );
}

export default App;
