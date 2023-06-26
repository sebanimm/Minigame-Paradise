import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0 102px;
  margin: 120px auto;
  width: 100%;
  flex-wrap: wrap;
`;

export const Game = styled.div`
  width: 120px;
  height: 120px;
  outline: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
`;

export const GameName = styled.div`
  margin: 10px 0;
  width: 100%;
  text-align: center;
`;
