import React from "react";
import gameList from "@/constants/gameList";
import * as S from "./style";
import { Link } from "react-router-dom";

const GameList = () => {
  return (
    <S.Container>
      {gameList.map((obj) => (
        <div key={obj.id}>
          <S.Game>
            <Link to={obj.link}>
              <img src={obj.src} alt={obj.name} />
            </Link>
          </S.Game>
          <S.GameName>{obj.name}</S.GameName>
        </div>
      ))}
    </S.Container>
  );
};

export default GameList;
