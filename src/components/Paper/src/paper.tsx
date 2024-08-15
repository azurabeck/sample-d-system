import React from "react";
import * as S from "./styles";

export interface PaperProps {
  icon?: never;
  title?: string;
  width?: string | number;
  children?: React.ReactNode;
}

const Paper: React.FC<PaperProps> = ({ title, children, width, icon }) => {
  return (
    <S.PaperWrapper width={width}>
      <S.TextContainer>
        <S.TitlePaper>{title}</S.TitlePaper>
        <S.Text>{children}</S.Text>
      </S.TextContainer>
      {icon && <S.ImageWrapper>{icon}</S.ImageWrapper>}
    </S.PaperWrapper>
  );
};

export default Paper;
