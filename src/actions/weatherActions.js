import axios from "axios";
import "@sweetalert2/theme-dark";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { weather_api } from "../api";

export const getLocationWeather = (query) => async (dispatch) => {
  dispatch({
    type: "LOADING_DATA",
  });
  const locationWeather = await axios.get(weather_api(query));
  dispatch({
    type: "FETCH_WEATHER",
    payload: {
      weather: locationWeather,
    },
  });
};

export const getSearchedWeather = (query) => async (dispatch) => {
  const searchedWeather = await axios.get(weather_api(query)).catch((error) => {
    return error.response;
  });
  if (searchedWeather.status === 200) {
    dispatch({
      type: "FETCH_SEARCHED",
      payload: {
        searched: searchedWeather,
      },
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${searchedWeather.data.error.message}`,
    });
  }
};
