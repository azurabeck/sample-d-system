import React from "react";
import * as S from "./styles";
import { TableStepProps } from "./types";

const TableStepRoot: React.FC<TableStepProps> = ({ children }) => {
  return <S.ContainerWrapper>{children}</S.ContainerWrapper>;
};

export default TableStepRoot;
