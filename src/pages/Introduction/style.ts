import styled from "styled-components";

export const Container = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Text = styled.div`
  font-size: 100px;
`;
