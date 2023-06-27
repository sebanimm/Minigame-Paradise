import { useEffect, useState } from "react";
import * as S from "./style";
import Bird from "@/assets/yellowbird-upflap.png";
import Background from "@/assets/background-day.png";
import Pipe from "@/assets/pipe-green.png";
import {
  BIRD_HEIGHT,
  BIRD_WIDTH,
  WALL_HEIGHT,
  WALL_WIDTH,
  GRAVITY,
  OBJ_WIDTH,
  OBJ_SPEED,
  OBJ_GAP,
  INITIAL_HEIGHT,
  INITIAL_POS,
  INITIAL_SCORE,
} from "@/constants/flyfly";
import GameOver from "@components/GameOver";

const FlyFly = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [birdpos, setBirspos] = useState<number>(INITIAL_POS);
  const [objHeight, setObjHeight] = useState<number>(INITIAL_HEIGHT);
  const [objPos, setObjPos] = useState<number>(WALL_WIDTH);
  const [currentScore, setCurrentScore] = useState<number>(INITIAL_SCORE);
  const [isGameOver, setIsGameOver] = useState<boolean>(true);

  useEffect(() => {
    let intVal: any;
    if (isStart && birdpos < WALL_HEIGHT - BIRD_HEIGHT) {
      intVal = setInterval(() => {
        setBirspos((birdpos) => birdpos + GRAVITY);
      }, 24);
    }
    return () => clearInterval(intVal);
  });

  useEffect(() => {
    let objval: any;
    if (isStart && objPos >= -OBJ_WIDTH) {
      objval = setInterval(() => {
        setObjPos((objPos) => objPos - OBJ_SPEED);
      }, 24);

      return () => {
        clearInterval(objval);
      };
    } else {
      setObjPos(WALL_WIDTH);
      setObjHeight(Math.floor(Math.random() * (WALL_HEIGHT - OBJ_GAP)));
      if (isStart) setCurrentScore((currentScore) => currentScore + 1);
    }
  }, [isStart, objPos]);

  useEffect(() => {
    const topObj = birdpos >= 0 && birdpos < objHeight;
    const bottomObj =
      birdpos <= WALL_HEIGHT &&
      birdpos >= WALL_HEIGHT - (WALL_HEIGHT - OBJ_GAP - objHeight) - BIRD_HEIGHT;

    if (objPos >= OBJ_WIDTH && objPos <= OBJ_WIDTH + 80 && (topObj || bottomObj)) {
      setIsStart(false);
      setIsGameOver(false);
      setBirspos(INITIAL_POS);
    }
  }, [isStart, birdpos, objHeight, objPos]);

  const handler = () => {
    if (!isGameOver && !isStart) {
      setIsGameOver(true);
      setCurrentScore(INITIAL_SCORE);
    }
    if (!isStart) setIsStart(true);
    else if (birdpos < BIRD_HEIGHT) setBirspos(0);
    else setBirspos((birdpos) => birdpos - 50);
  };

  useEffect(() => {
    const score = window.localStorage.getItem("flyfly-score");
    if (score === "0") {
      window.localStorage.setItem("flyfly-score", currentScore.toString());
    }
    if (score !== null && currentScore > parseInt(score)) {
      window.localStorage.setItem("flyfly-score", currentScore.toString());
    }
  }, [isGameOver]);
  // 1. 점수갱신
  return (
    <S.Home onClick={handler}>
      <span>Score: {currentScore}</span>
      <S.Background height={WALL_HEIGHT} width={WALL_WIDTH} url={Background}>
        {!isStart ? <S.Startboard>Click To Start</S.Startboard> : null}
        {!isGameOver ? <GameOver /> : null}
        <S.Obj
          height={objHeight}
          width={OBJ_WIDTH}
          left={objPos}
          top={0}
          deg={180}
          url={Pipe}
        />
        <S.Bird
          height={BIRD_HEIGHT}
          width={BIRD_WIDTH}
          top={birdpos}
          left={100}
          url={Bird}
        />
        <S.Obj
          height={WALL_HEIGHT - OBJ_GAP - objHeight}
          width={OBJ_WIDTH}
          left={objPos}
          top={WALL_HEIGHT - (objHeight + (WALL_HEIGHT - OBJ_GAP - objHeight))}
          deg={0}
          url={Pipe}
        />
      </S.Background>
    </S.Home>
  );
};

export default FlyFly;
