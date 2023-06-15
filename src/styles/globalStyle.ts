import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'BRBA_B';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.2/BRBA_B.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: "BRBA_B";
  margin: 0;
}

a:link, a:visited {
  text-decoration: none;
  color: black;
}
`;

export default GlobalStyle;
