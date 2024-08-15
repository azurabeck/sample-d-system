import React from "react";
import * as S from "./styles";

interface TooltipProps {
  children?: React.ReactNode;
  title?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, title }) => {
  return (
    <S.TooltipWrapper>
      {children}
      <S.TooltipText className="tooltiptext">{title}</S.TooltipText>
    </S.TooltipWrapper>
  );
};

export default Tooltip;
