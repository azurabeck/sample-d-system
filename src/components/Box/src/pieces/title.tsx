import React from "react";
import { BoxProps } from "./type";
import AlertErrorIcon from "../assets/alert-color.svg";

import * as S from "./styles";

const BoxTitle: React.FC<BoxProps> = ({
  children,
  error = false,
  errorMessage,
}) => {
  return (
    <S.TitleContainer>
      <S.Title>{children}</S.Title>
      {error && (
        <S.ErrorContainer>
          <AlertErrorIcon />
          <S.TextError>{errorMessage}</S.TextError>
        </S.ErrorContainer>
      )}
    </S.TitleContainer>
  );
};
export default BoxTitle;
