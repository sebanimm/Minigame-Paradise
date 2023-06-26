import { MainOptionsType } from "@/types/constants.type";

const options: MainOptionsType[] = [
  {
    id: 0,
    name: "first",
    text: "게임 시작",
    link: "/selection",
  },
  {
    id: 1,
    name: "second",
    text: "게임 소개",
    link: "/introduction",
  },
  {
    id: 2,
    name: "third",
    text: "개발한놈 깃허브",
    link: "https://github.com/sebanimm",
    blank: true,
  },
];

export default options;
