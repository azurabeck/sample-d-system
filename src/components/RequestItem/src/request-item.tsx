import React from "react";
import * as S from "./styles";

interface RequestItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  direction?: "row" | "column";
}

const RequestItem: React.FC<RequestItemProps> = ({
  icon,
  children,
  direction = "column",
  ...rest
}) => {
  return (
    <S.CardWrapper direction={direction}>
      <S.ButtonWrapper {...rest}>{icon}</S.ButtonWrapper>
      <S.Text>{children}</S.Text>
    </S.CardWrapper>
  );
};

export default RequestItem;
