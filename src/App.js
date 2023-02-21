import styled from 'styled-components';
import ExchangeBox from './components/ExchangeBox';

function App() {
  return (
    <Block>
      <ExchangeBox />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default App;
