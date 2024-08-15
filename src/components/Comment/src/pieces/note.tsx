import React from "react";
import * as S from "./styles";
import { CommentsProps } from "./type";

const CommentNote: React.FC<CommentsProps> = ({ children }) => {
  return <S.TextComment light>{children}</S.TextComment>;
};

export default CommentNote;
