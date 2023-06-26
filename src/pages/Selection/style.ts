import styled from "styled-components";

export const Container = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.div`
  font-size: 40px;
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8f8f8f;
  color: white;
`;

export const Top = styled.div`
  width: 787px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
