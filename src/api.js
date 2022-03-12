const api_url = "https://api.weatherapi.com/v1/forecast.json?";
const api_key = `key=${process.env.REACT_APP_KEY}`;

export const weather_api = (query) =>
  `${api_url}${api_key}&q=${query}&days=2&aqi=no&alerts=no`;
