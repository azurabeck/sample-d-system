import React from "react";
import * as S from "./styles";

export interface TagProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children?: React.ReactNode;
  variant?: "round" | "square";
}

const TagButton: React.FC<TagProps> = ({
  active,
  children,
  variant = "square",
  ...rest
}) => {
  return (
    <S.TagWrapper active={active} br={variant} {...rest}>
      <S.TagText active={active}>{children}</S.TagText>
    </S.TagWrapper>
  );
};

export default TagButton;
