import React from "react";
import * as S from "./styles";
import { CommentsProps } from "./type";

const CommentName: React.FC<CommentsProps> = ({ children }) => {
  return <S.TextComment>{children}</S.TextComment>;
};

export default CommentName;
