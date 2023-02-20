import styled from 'styled-components';
import SelectInput from './components/SelectInput';

function App() {
  return (
    <Block>
      <InputGroup>
        <SelectInput />
        <SelectInput />
      </InputGroup>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const InputGroup = styled.div`
  width: 340px;
`;

export default App;
