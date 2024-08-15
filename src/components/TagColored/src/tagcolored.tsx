import React from "react";
import * as S from "./styles";

export interface TagColoredProps {
  color?: string;
  background?: string;
  children?: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary";
}

const Tagcolored: React.FC<TagColoredProps> = ({
  color,
  children,
  background,
  type = "primary",
}) => {
  return (
    <S.TagColor type={type} background={background}>
      <S.TagText type={type} color={color}>
        {children}
      </S.TagText>
    </S.TagColor>
  );
};

export default Tagcolored;
