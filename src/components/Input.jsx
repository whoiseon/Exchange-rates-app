import styled from 'styled-components';

function Input(props) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  background-color: inherit;
  width: 120px;
  height: 46px;
  font-size: 16px;
  border: none;
  color: inherit;
  padding: 1px 6px 1px 12px;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default Input;
