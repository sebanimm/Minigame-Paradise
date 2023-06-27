import styled from "styled-components";

export const Home = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Background = styled.div<{ width: number; height: number; url: string }>`
  background: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
  overflow: hidden;
  border: 2px solid black;
`;

export const Bird = styled.div<{
  width: number;
  height: number;
  top: number;
  left: number;
  url: string;
}>`
  position: absolute;
  background: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

export const Obj = styled.div<{
  width: number;
  height: number;
  top: number;
  left: number;
  deg: number;
  url: string;
}>`
  position: relative;
  background: url(${(props) => props.url});
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: rotate(${(props) => props.deg}deg);
`;

export const Startboard = styled.div`
  position: relative;
  top: 49%;
  background-color: black;
  padding: 10px;
  width: 100px;
  left: 50%;
  margin-left: -50px;
  text-align: center;
  font-size: 20px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
`;

export const ScoreShow = styled.div`
  text-align: center;
  background: transparent;
`;
