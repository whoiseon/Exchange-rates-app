import styled from 'styled-components';

function Input() {
  return <StyledInput />;
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
`;

export default Input;
