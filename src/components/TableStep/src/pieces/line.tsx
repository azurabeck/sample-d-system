import React from "react";
import * as S from "./styles";
import { TableStepProps } from "./types";

const TableStepLine: React.FC<TableStepProps> = ({ children }) => {
  return <S.Text>{children}</S.Text>;
};

export default TableStepLine;
