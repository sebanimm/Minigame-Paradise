import React from "react";
import * as S from "./style";
import Background from "@/assets/background.png";

const Introduction = () => {
  return (
    <S.Container src={Background}>
      <S.Text>미니게임낙원은 여러 가지의 미니게임을 즐길 수 있는 웹이에요.</S.Text>
    </S.Container>
  );
};

export default Introduction;
