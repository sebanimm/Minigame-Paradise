import React from "react";
import * as S from "./style";
import { getRanking, addRanking } from "@/Firebase";
import Rank from "@components/Rank";

const currentRanking = await getRanking();
const sortedRanking = currentRanking.sort((a, b) => {
  return b.score - a.score;
});

const Ranking = () => {
  const storageScore = window.localStorage.getItem("flyfly-score");
  const score = storageScore === null ? 0 : parseInt(storageScore);
  const [name, setName] = React.useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name !== "") {
      addRanking(name, score);
      setName("");
    }
  };

  return (
    <S.Container>
      <S.RankingWrapper>
        <Rank rating="순위" name="이름" score="점수" />
        {sortedRanking.map((obj, idx) => (
          <Rank key={obj.id} rating={idx + 1} name={obj.name} score={obj.score}>
            {obj.score}
          </Rank>
        ))}
      </S.RankingWrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Input>
          <input
            placeholder={`랭킹을 남기고 싶다면 이름을 입력해주세요! 당신의 최고 점수 : ${score}`}
            value={name}
            onChange={handleInputChange}
          />
        </S.Input>
        <S.Button type="submit">입력하기</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Ranking;
