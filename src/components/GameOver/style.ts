import styled from "styled-components";

export const Container = styled.div`
  background-color: gray;
  width: 100vw;
  height: 100vh;
  position: fixed;
  color: black;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  div {
    margin: 0;
  }
`;

export const Text = styled.div`
  text-align: center;
  font-size: 60px;
`;
