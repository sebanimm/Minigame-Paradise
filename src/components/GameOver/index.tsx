import React from "react";
import Options from "@components/Options";
import options from "@/constants/gameover.options";
import * as S from "./style";

const GameOver = () => {
  return (
    <S.Container>
      <S.Text>Game Over</S.Text>
      <Options options={options} />
    </S.Container>
  );
};

export default GameOver;
