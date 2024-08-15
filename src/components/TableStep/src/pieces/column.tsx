import React, { Fragment } from "react";
import { TableStepProps } from "./types";
import * as S from "./styles";

const TableStepColumn: React.FC<TableStepProps> = ({ children }) => {
  return (
    <Fragment>
      <S.StepGridItem>{children}</S.StepGridItem>
      <S.Divider />
    </Fragment>
  );
};

export default TableStepColumn;
