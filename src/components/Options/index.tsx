import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import Arrow from "@/assets/arrow.svg";
import { ArrowType } from "@/types/components.type";

const Options = ({ options }: any) => {
  const [arrow, setArrow] = React.useState<ArrowType>({
    first: false,
    second: false,
    third: false,
  });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    setArrow({ first: false, second: false, third: false, [id]: true });
  };

  return (
    <S.Container>
      {options.map((obj: any) => (
        <S.Option key={obj.id} id={obj.name} onMouseEnter={handleMouseEnter}>
          <S.Select id={`${arrow[obj.name]}`} src={Arrow} />
          <S.Text>
            <Link to={obj.link} target={obj.blank ? "_blank" : "_self"}>
              {obj.text}
            </Link>
          </S.Text>
        </S.Option>
      ))}
    </S.Container>
  );
};

export default Options;
