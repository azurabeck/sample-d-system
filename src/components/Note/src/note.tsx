import React from "react";
import * as S from "./styles";

export interface NoteProps {
  icon?: React.ReactNode;
  arrow?: "top" | "left";
  elevation?: 0 | 1 | 2 | 3;
  children?: React.ReactNode;
}

const Note: React.FC<NoteProps> = ({
  icon,
  children,
  elevation,
  arrow = "left",
}) => {
  return (
    <S.NoteWrapper elevation={elevation}>
      <S.Arrow arrow={arrow} />
      <S.Container>
        <S.TitleContainer>
          {icon && <S.Icon>{icon}</S.Icon>}
          <S.TextNote arrow={arrow}>{children}</S.TextNote>
        </S.TitleContainer>
      </S.Container>
    </S.NoteWrapper>
  );
};

export default Note;
