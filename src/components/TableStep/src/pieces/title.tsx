import React from "react";
import * as S from "./styles";
import { TableStepTitleProps } from "./types";

const TableStepTitle: React.FC<TableStepTitleProps> = ({ icon, children }) => {
  return (
    <S.StepTitleWrapper>
      {icon}
      <S.Text>{children}</S.Text>
    </S.StepTitleWrapper>
  );
};

export default TableStepTitle;
