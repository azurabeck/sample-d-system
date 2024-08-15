import React from "react";
import * as S from "./styles";
import { TableStepProps } from "./types";

const TableStepBody: React.FC<TableStepProps> = ({ children }) => {
  return <S.StepGridItem>{children}</S.StepGridItem>;
};

export default TableStepBody;
