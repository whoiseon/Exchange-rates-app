import axios from 'axios';

export async function fetchExchangeRates({ from, to }) {
  const response = await axios.get(
    `https://api.exchangerate.host/convert?from=${from}&to=${to}&places=5`
  );

  return response.data;
}

export async function fetchSupportedCountry() {
  const response = await axios.get('https://api.exchangerate.host/symbols');

  return response.data.symbols;
}
