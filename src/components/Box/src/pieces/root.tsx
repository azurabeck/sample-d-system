import React from "react";
import * as S from "./styles";
import { BoxRootProps } from "./type";

const BoxRoot: React.FC<BoxRootProps> = ({ children, error = false }) => {
  return <S.Wrapper isRequired={error}>{children}</S.Wrapper>;
};
export default BoxRoot;
