import React from "react";
import * as S from "./style";
import GameList from "@/components/GameList";
import Background from "@/assets/background.png";

const Selection = () => {
  return (
    <S.Container src={Background}>
      <S.Top>
        <S.Header>게임 고르기</S.Header>
        <GameList />
      </S.Top>
    </S.Container>
  );
};

export default Selection;
