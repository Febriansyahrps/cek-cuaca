import { createGlobalStyle } from "styled-components";
import bg from "../assets/images/ales-krivec-In7RdU6QY2M-unsplash.jpg";
const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
  }
  body {
    font-family: "Montserrat", sans-serif;
    color: #fafafa;
    background-attachment: fixed;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  h1 {
    font-weight: normal;
    font-size: 38px;
    @media screen and (max-width: 600px) {
      font-size: 32px;
    }
  }
  h2 {
    font-weight: normal;
    font-size: 24px;
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
  }
  h3 {
    font-weight: normal;
    font-size: 18px;
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
  p {
    font-size: 14px;
    @media screen and (max-width: 900px) {
      font-size: 12px;
    }
  }
`;
export default GlobalStyle;
