import styled from 'styled-components';
import Input from './Input';
import Select from './Select';

function SelectInput(props) {
  return (
    <Block>
      <Input {...props} />
      <Select />
    </Block>
  );
}

const Block = styled.div`
  position: relative;
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  overflow: hidden;
  &:first-of-type {
    margin-bottom: 16px;
  }
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.6);
  }
`;

export default SelectInput;
