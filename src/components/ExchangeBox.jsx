import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Select from './Select';
import { fetchExchangeRates, fetchSupportedCountry } from '../lib/api';
import Loading from './Loading';

const toFloat = (number, fixCount) => {
  return parseFloat(number.toFixed(fixCount));
};

function ExchangeBox() {
  const [init, setInit] = useState(false);

  const [symbols, setSymbols] = useState(null);
  const [rates, setRates] = useState(0);

  const [value, setValue] = useState({
    from: {
      amount: 1,
      currency: 'KRW',
    },
    to: {
      amount: '',
      currency: 'USD',
    },
  });

  const onChangeAmountFrom = useCallback(
    (event) => {
      if (event.target.value < 0) return;
      setValue((prev) => ({
        ...prev,
        from: { ...prev.from, amount: event.target.value },
        to: { ...prev.to, amount: toFloat(event.target.value * rates, 5) },
      }));
    },
    [rates]
  );

  const onChangeAmountTo = useCallback(
    (event) => {
      if (event.target.value < 0) return;
      setValue((prev) => ({
        ...prev,
        from: { ...prev.from, amount: toFloat((1 / rates) * event.target.value, 2) },
        to: { ...prev.to, amount: event.target.value },
      }));
    },
    [rates]
  );

  const onChangeCountryFrom = useCallback((event) => {
    setValue((prev) => ({
      ...prev,
      from: {
        ...prev.from,
        currency: event.target.value,
      },
    }));
  }, []);

  const onChangeCountryTo = useCallback((event) => {
    setValue((prev) => ({
      ...prev,
      to: {
        ...prev.to,
        currency: event.target.value,
      },
    }));
  }, []);

  useEffect(() => {
    // api가 지원하는 국가 정보를 가져온 후 할당
    fetchSupportedCountry().then((data) => {
      setSymbols(data);
      setInit(true);
    });
  }, []);

  useEffect(() => {
    // api로 부터 rate 불러오고 state에 할당
    fetchExchangeRates({
      from: value.from.currency,
      to: value.to.currency,
    }).then((data) => {
      setRates(data.info.rate);
    });
  }, [value]);

  useEffect(() => {
    // rates가 바뀔 때 마다 to input 재계산
    setValue((prev) => ({
      ...prev,
      to: { ...prev.to, amount: toFloat(prev.from.amount * rates, 5) },
    }));
  }, [rates]);

  if (!init) {
    return <Loading />;
  }

  return (
    <Block>
      <Info>
        1 {value.from.currency} = {rates} {value.to.currency}
      </Info>
      <InputGroup>
        <Input
          placeholder="0"
          type="number"
          value={value.from.amount}
          onChange={onChangeAmountFrom}
        />
        <Select
          onChange={onChangeCountryFrom}
          symbols={Object.keys(symbols)}
          currency={value.from.currency}
        />
      </InputGroup>
      <InputGroup>
        <Input placeholder="0" type="number" value={value.to.amount} onChange={onChangeAmountTo} />
        <Select
          onChange={onChangeCountryTo}
          symbols={Object.keys(symbols)}
          currency={value.to.currency}
        />
      </InputGroup>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 340px;
`;

const Info = styled.p`
  color: #999;
`;

const InputGroup = styled.div`
  position: relative;
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.2);
  ${(props) =>
    props.isFocused &&
    `
    outline: 1px solid white;
  `}
  border-radius: 6px;
  overflow: hidden;

  &:first-of-type {
    margin-bottom: 16px;
  }
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.6);
  }
  &:focus-within {
    outline: 1px solid rgba(255, 255, 255, 0.8);
  }
`;

export default ExchangeBox;
