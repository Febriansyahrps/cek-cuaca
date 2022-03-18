import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocationWeather } from "../actions/weatherActions";
import Forecast from "../components/Forecast";
import { getTimeHandler, getDateHandler } from "../components/util";
import Navbar from "../components/Navbar";
import CurrentWeather from "../components/CurrentWeather";
import styled from "styled-components";

const Home = () => {
  const dispatch = useDispatch();
  // state
  const [location, setLocation] = useState(null);
  useEffect(() => {
    // get location
    navigator.geolocation.getCurrentPosition((state) => {
      const position = `${state.coords.latitude} ${state.coords.longitude}`;
      setLocation(position);
    });
    dispatch(getLocationWeather(location));
  }, [dispatch, location]);
  // useSelector
  const { weather, loading } = useSelector((state) => state.weatherInfo);
  return (
    <HomeContainer>
      <Navbar />
      {!loading && (
        <BottomContainer>
          <TimeContainer>
            <div>
              <h3>{getDateHandler(weather.data.location.localtime)}</h3>
              <h1>{getTimeHandler(weather.data.location.localtime)}</h1>
            </div>
          </TimeContainer>
          <WeatherContainer>
            <CurrentWeatherContainer>
              <CurrentWeather />
            </CurrentWeatherContainer>
            <ForecastContainer>
              <Forecast />
            </ForecastContainer>
          </WeatherContainer>
        </BottomContainer>
      )}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  width: 100%;
`;
const TimeContainer = styled.div`
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 100px 0 20px 0;
    width: 250px;
    height: 100px;
    background: rgba(17, 17, 31, 0.8);
    padding: 0 20px;
    margin-left: 2.5%;
    @media screen and (max-width: 600px) {
      margin-top: 150px;
      margin-left: 20px;
      width: 200px;
      height: 80px;
    }
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
const WeatherContainer = styled.div`
  background: rgba(17, 17, 31, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 2.5%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media screen and (min-height: 900px) {
    flex-direction: column;
    padding: 0 5%;
  }
`;
const CurrentWeatherContainer = styled.div`
  width: 30%;
  @media screen and (max-width: 1200px) {
    width: 40%;
  }
  @media screen and (max-width: 900px) {
    width: 45%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (min-height: 900px) {
    width: 100%;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
const ForecastContainer = styled.div`
  width: 70%;
  @media screen and (max-width: 1200px) {
    width: 60%;
  }
  @media screen and (max-width: 900px) {
    width: 55%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (min-height: 900px) {
    width: 100%;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export default Home;
