import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'BRBA_B';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.2/BRBA_B.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'NeoDunggeunmoPro-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
} 

body {
  font-family: "NeoDunggeunmoPro-Regular";
  margin: 0;
}

a:link, a:visited {
  text-decoration: none;
  color: black;
}
`;

export default GlobalStyle;
