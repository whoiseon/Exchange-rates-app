import styled from 'styled-components';

function Select() {
  return (
    <Block>
      <Line />
      <StyledSelect>
        <option value="123">123</option>
      </StyledSelect>
    </Block>
  );
}

const Block = styled.div`
  flex: 1;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  top: 9px;
  left: 0;
  width: 1px;
  height: 60%;
  background-color: rgba(255, 255, 255, 0.2);
`;

const StyledSelect = styled.select`
  background-color: inherit;
  color: inherit;
  padding-left: 16px;
  padding-right: 16px;
  border: none;
  width: 100%;
  height: 100%;
  text-align: right;
  padding: 0 16px;
  font-size: 16px;
  outline: none;

  &:focus {
    background-color: #191919;
  }
`;

export default Select;
