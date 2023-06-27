import React from "react";
import * as S from "./style";

interface RankPropsType {
  rating: string | number;
  name: string;
  score: string | number;
}

const Rank = ({ rating, name, score }: RankPropsType) => {
  return (
    <S.Info>
      <S.Rating>{rating}</S.Rating>
      <S.Name>{name}</S.Name>
      <S.Score>{score}</S.Score>
    </S.Info>
  );
};

export default Rank;
