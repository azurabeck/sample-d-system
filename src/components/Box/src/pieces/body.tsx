import React from "react";
import { BoxProps } from "./type";

import AlertErrorIcon from "../assets/alert-color.svg";

import * as S from "./styles";

const BoxBody: React.FC<BoxProps> = ({
  children,
  errorMessage,
  error = false,
}) => {
  return (
    <>
      <S.ChildrenContainer>{children}</S.ChildrenContainer>
      {error && (
        <S.ErrorContainer errorBox>
          <AlertErrorIcon />
          <S.TextError>{errorMessage}</S.TextError>
        </S.ErrorContainer>
      )}
    </>
  );
};
export default BoxBody;
