import React from "react";
import * as S from "./styles";

export interface LoadingIconProps {
  icon?: React.ReactNode;
  size?: number;
  background?: string;
  border?: number;
  color?: string;
}
const LoadingIcon: React.FC<LoadingIconProps> = ({
  icon,
  size = 50,
  border = 3,
  color = "#1c77cf",
  background = "#dfdfe2",
}) => {
  return (
    <S.Container>
      <S.Img>{icon}</S.Img>
      <S.Spinner
        background={color}
        color={background}
        size={size}
        border={border}
      />
    </S.Container>
  );
};

export default LoadingIcon;
