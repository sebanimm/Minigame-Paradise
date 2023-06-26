import styled from "styled-components";

export const Container = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  width: 100vw;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 100px;
  padding: 12vh 0;
`;
