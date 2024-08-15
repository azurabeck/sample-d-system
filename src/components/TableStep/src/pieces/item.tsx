import React from "react";
import * as S from "./styles";
import { TableStepProps } from "./types";

const TableStepItem: React.FC<TableStepProps> = ({ children }) => {
  return <S.Text thin>{children}</S.Text>;
};

export default TableStepItem;
