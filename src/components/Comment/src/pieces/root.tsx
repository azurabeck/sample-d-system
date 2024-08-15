import React from "react";
import { CommentRootProps } from "./type";
import { getInitialLetterName } from "../utils/InitialCaracterName";
import * as S from "./styles";

const CommentRoot: React.FC<CommentRootProps> = ({
  children,
  userName,
  color,
}) => {
  const InitialLetterName = getInitialLetterName(userName);
 
  return (
    <S.Wrapper>
      <S.AvatarContainer color={color}>
        <S.AvatarText>{InitialLetterName}</S.AvatarText>
      </S.AvatarContainer>
      <S.CommentContainer>{children}</S.CommentContainer>
    </S.Wrapper>
  );
};

export default CommentRoot;
