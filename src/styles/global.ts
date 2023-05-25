import { createGlobalStyle } from "styled-components";
import BRBA_R from "../fonts/BRBA_R.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "BRBA_R";
    src: local("BRBA_R"), local("BRBA_R");
    font-style: normal;
    src: url(${BRBA_R}) format("truetype");
  }

  div {
    font-family: "BRBA_R";
  }
`;

export default GlobalStyle;
