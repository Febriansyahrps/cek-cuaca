import { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ForecastCard from "./ForecastCard";
import {
  getTimesofDayHandler,
  getForecastHandler,
  getHourHandler,
} from "../components/util";
import weatherIcons from "../components/images";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Forecast = () => {
  const ref = useRef(null);
  // useSelector
  const { weather } = useSelector((state) => state.weatherInfo);
  // scroll handler
  const scrollHandler = (scroll) => {
    ref.current.scrollLeft += scroll;
  };
  return (
    <ForecastContainer>
      <hr />
      <Location>
        <h2>
          {weather.data.location.name}, {weather.data.location.country}
        </h2>
        <p>Forecast in next 6 hour</p>
      </Location>
      <CardsContainer>
        <button onClick={() => scrollHandler(-200)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <Cards ref={ref}>
          {getForecastHandler(
            weather.data.forecast.forecastday[0].hour,
            weather.data.forecast.forecastday[1].hour,
            getHourHandler(weather.data.location.localtime)
          ).map((state) => (
            <ForecastCard
              key={state.time_epoch}
              time={state.time}
              condition={state.condition.text}
              celcius={state.temp_c}
              farenheit={state.temp_f}
              weatherIcon={weatherIcons(
                getTimesofDayHandler(state.condition.icon),
                state.condition.code
              )}
            />
          ))}
        </Cards>
        <button onClick={() => scrollHandler(+200)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </CardsContainer>
    </ForecastContainer>
  );
};

const ForecastContainer = styled.div`
  hr {
    margin: 15px 0;
    width: 100%;
    border: solid 1px rgba(250, 250, 250, 0.1);
  }
  @media screen and (max-width: 600px) {
    margin: 0 20px;
  }
  @media screen and (max-width: 450px) {
    margin: 0 10px;
  }
  @media screen and (min-width: 601px) {
    hr {
      display: none;
    }
  }
  @media screen and (min-height: 900px) {
    hr {
      display: block;
    }
  }
`;
const Location = styled.div`
  p {
    margin: 10px 0;
  }
  @media screen and (max-width: 600px) {
    h2 {
      display: none;
    }
  }
  @media screen and (min-height: 900px) {
    h2 {
      display: none;
    }
  }
`;
const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  button {
    cursor: pointer;
    background: none;
    border: none;
    svg {
      transition: all ease 0.25s;
      font-size: 50px;
      color: #fafafa;
      &:hover {
        color: #baadaa;
      }
      @media screen and (max-width: 900px) {
        font-size: 30px;
      }
    }
  }
  @media screen and (max-width: 450px) {
    button {
      display: none;
    }
  }
  @media screen and (min-width: 1200px) {
    @media screen and (min-height: 900px) {
      button {
        display: none;
      }
    }
  }
  @media screen and (min-width: 1650px) {
    button {
      display: none;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    overflow: hidden;
  }
  @media screen and (min-width: 1200px) {
    @media screen and (min-height: 900px) {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }
`;

export default Forecast;
