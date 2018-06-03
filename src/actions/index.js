import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";

const API_KEY = "15e39f24e05f6ea0af88f89dc11e5295";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return function(dispatch) {
    dispatch({
      type: FETCH_WEATHER,
      payload: request
    });
  };
}
