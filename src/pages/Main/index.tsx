import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import Arrow from "@/assets/arrow.svg";
import Background from "@/assets/background.png";

const Main = () => {
  const [hovers, setHovers] = React.useState({
    first: false,
    second: false,
    third: false,
  });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    setHovers({ first: false, second: false, third: false, [id]: true });
  };

  return (
    <S.Container src={Background}>
      <S.Title>미니게임낙원</S.Title>
      <S.Options>
        <S.Option id="first" onMouseEnter={handleMouseEnter}>
          <S.Select id={`${hovers.first}`} src={Arrow} />
          <S.Text>
            <Link to="/selection">게임 시작</Link>
          </S.Text>
        </S.Option>
        <S.Option id="second" onMouseEnter={handleMouseEnter}>
          <S.Select id={`${hovers.second}`} src={Arrow} />
          <S.Text>
            <Link to="/introduction">게임 소개</Link>
          </S.Text>
        </S.Option>
        <S.Option id="third" onMouseEnter={handleMouseEnter}>
          <S.Select id={`${hovers.third}`} src={Arrow} />
          <S.Text>
            <a href="https://github.com/sebanimm" target="_blank">
              개발한놈 깃허브
            </a>
          </S.Text>
        </S.Option>
      </S.Options>
    </S.Container>
  );
};

export default Main;
