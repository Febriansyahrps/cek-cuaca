import { useSelector } from "react-redux";
import { getTimesofDayHandler } from "../components/util";
import weatherIcons from "../components/images";
import temperatur from "../assets/icons/temperatur.png";
import wind from "../assets/icons/wind.png";
import styled from "styled-components";

const CurrentWeather = () => {
  // useSelector
  const { weather } = useSelector((state) => state.weatherInfo);

  return (
    <CurrentWeatherContainer>
      <h2>
        {weather.data.location.name}, {weather.data.location.country}
      </h2>
      <WeatherContainer>
        <WeatherCondition>
          <img
            src={weatherIcons(
              getTimesofDayHandler(weather.data.current.condition.icon),
              weather.data.current.condition.code
            )}
            alt="weather icons"
          />
          <h3>{weather.data.current.condition.text}</h3>
        </WeatherCondition>
        <WeatherInfo>
          <div>
            <img src={temperatur} alt="temperatur" />
            <p>{weather.data.current.temp_c}° C</p>
          </div>
          <div>
            <img src={temperatur} alt="temperatur" />
            <p>{weather.data.current.temp_f}° F</p>
          </div>
          <div>
            <img src={wind} alt="wind" />
            <p>{weather.data.current.wind_kph} km/h</p>
          </div>
        </WeatherInfo>
      </WeatherContainer>
    </CurrentWeatherContainer>
  );
};

const CurrentWeatherContainer = styled.div`
  height: 100%;
  h2 {
    margin-left: 20px;
    margin-block: 10px;
  }
  @media screen and (min-width: 601px) {
    h2 {
      display: none;
    }
  }
  @media screen and (min-height: 900px) {
    h2 {
      display: block;
    }
  }
`;
const WeatherContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    flex-direction: row;
  }
  @media screen and (min-height: 900px) {
    flex-direction: row;
  }
`;
const WeatherCondition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  img {
    max-width: 200px;
  }
  h3 {
    max-width: 200px;
    margin-top: 20px;
  }
  @media screen and (max-width: 900px) {
    margin: 0 auto;
    img {
      max-width: 175px;
      max-height: 160px;
    }
  }
  @media screen and (min-height: 900px) {
    margin: 0 auto;
  }
`;
const WeatherInfo = styled.div`
  margin-left: 10px;
  div {
    height: 45px;
    display: flex;
    align-items: center;
    padding-top: 15px;
  }
  img {
    width: 20px;
    margin-inline: 10px;
  }
  @media screen and (max-width: 900px) {
    margin: 0;
    display: flex;
    justify-content: space-around;
  }
  @media screen and (max-width: 600px) {
    height: 100%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-height: 900px) {
    height: 100%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
  }
`;
export default CurrentWeather;
