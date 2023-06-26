import React from "react";
import gameList from "@/constants/gameList";
import * as S from "./style";

const GameList = () => {
  return (
    <S.Container>
      {gameList.map((obj) => (
        <div key={obj.id}>
          <S.Game>
            <img src={obj.src} alt={obj.name} />
          </S.Game>
          <S.GameName>{obj.name}</S.GameName>
        </div>
      ))}
    </S.Container>
  );
};

export default GameList;
