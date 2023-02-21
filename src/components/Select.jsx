import styled from 'styled-components';

function Select({ onChange, symbols, currency }) {
  return (
    <Block>
      <Line />
      <StyledSelect onChange={onChange} defaultValue={currency}>
        {symbols.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </StyledSelect>
    </Block>
  );
}

const Block = styled.div`
  flex: 1;
  position: relative;
  padding-right: 12px;
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
  height: 46px;
  text-align: right;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 16px;
  outline: none;
`;

export default Select;
