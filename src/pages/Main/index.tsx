import React from "react";
import * as S from "./style";
import Background from "@/assets/background.png";
import Options from "@components/Options";

const Main = () => {
  return (
    <S.Container src={Background}>
      <S.Title>미니게임낙원</S.Title>
      <Options />
    </S.Container>
  );
};

export default Main;
