import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  getLocationWeather,
  getSearchedWeather,
} from "../actions/weatherActions";

const Navbar = ({ setLocationError, setErrorMessage }) => {
  const dispatch = useDispatch();
  // state
  const [location, setLocation] = useState(null);
  const [textInput, setTextInput] = useState("");
  // searched handler
  const getTextLocation = (e) => {
    setTextInput(e.target.value);
  };
  const searchedLocationHandler = (e) => {
    e.preventDefault();
    dispatch(getSearchedWeather(textInput));
    setTextInput("");
  };
  // current position handler
  const currentPositionHandler = () => {
    navigator.geolocation.getCurrentPosition(
      (state) => {
        const position = `${state.coords.latitude} ${state.coords.longitude}`;
        setLocation(position);
        setLocationError(false);
      },
      (err) => {
        setLocationError(true);
        setErrorMessage(`Error, ${err.message}`);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
    if (location !== null) {
      dispatch(getLocationWeather(location));
    }
  };
  return (
    <NavbarContainer>
      <h1>CekCuaca</h1>
      <FormContainer>
        <form onSubmit={searchedLocationHandler}>
          <input
            type="text"
            value={textInput}
            onChange={getTextLocation}
            placeholder="Search a place"
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <button onClick={() => currentPositionHandler()}>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Location</p>
        </button>
      </FormContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Nunito Sans", sans-serif;
  }
`;
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  form {
    display: flex;
    align-items: center;
    input {
      border-radius: 5px;
      border: 2px #fafafa solid;
      height: 50px;
      width: 400px;
      outline: none;
      text-decoration: none;
      background: rgba(17, 17, 31, 0.8);
      color: #fafafa;
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      padding: 10px;
    }
    button {
      width: 50px;
      svg {
        margin: 0;
        font-size: 25px;
      }
    }
  }
  button {
    transition: 0.2s ease all;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    border: 2px #fafafa solid;
    background: rgba(17, 17, 31, 0.8);
    height: 50px;
    width: 100px;
    color: #fafafa;
    font-family: "Montserrat", sans-serif;
    svg {
      margin-right: 5px;
      font-size: 20px;
      color: #fafafa;
    }
    &:hover {
      background: rgba(17, 17, 31, 0.9);
    }
  }
  @media screen and (max-width: 600px) {
    form {
      input {
        width: 200px;
        font-size: 14px;
        height: 40px;
      }
      button {
        width: 40px;
        height: 40px;
        svg {
          font-size: 20px;
        }
      }
    }
    button {
      height: 40px;
      width: 40px;
      p {
        display: none;
      }
      svg {
        font-size: 20px;
        margin: 0;
      }
    }
  }
  @media screen and (max-width: 310px) {
    form {
      input {
        width: 150px;
      }
    }
  }
`;

export default Navbar;
