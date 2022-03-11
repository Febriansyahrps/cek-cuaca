import styled from "styled-components";
import { getTimeHandler } from "./util";

const ForecastCard = ({ time, condition, celcius, farenheit, weatherIcon }) => {
  return (
    <ForecastContainer>
      <p>{getTimeHandler(time)}</p>
      <div className="icon-container">
        <img src={weatherIcon} alt="weather" />
      </div>
      <p className="condition">{condition}</p>
      <Temperature>
        <p>{celcius}° C</p>
        <p>{farenheit}° F</p>
      </Temperature>
    </ForecastContainer>
  );
};

const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 175px;
  height: 200px;
  .icon-container {
    display: flex;
    align-items: center;
    height: 100px;
  }
  img {
    width: 100px;
    max-height: 100px;
  }
  .condition {
    display: flex;
    align-items: center;
    height: 35px;
  }
  @media screen and (max-width: 900px) {
    min-width: 125px;
    .icon-container {
      height: 75px;
    }
    img {
      width: 75px;
      max-height: 75px;
    }
  }
`;
const Temperature = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
`;

export default ForecastCard;
