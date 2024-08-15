// StatusTable.tsx
// Responsabilidade: Componente para renderizar o status na célula da tabela.

import React from "react";
import {HourglassIcon , CheckGreen} from "../../assets/index";
import { ContainerWrapper, TextStatus, IconWrapper } from "../../tableStyle";

export interface IStatusTableProps {
  status: number;
}

export const StatusTable: React.FC<IStatusTableProps> = ({ status }) => {

  if (status === 1) {
    return (
      <ContainerWrapper>
        {" "}
        <IconWrapper>
          <HourglassIcon />{" "} 
        </IconWrapper>
        <TextStatus>Pending</TextStatus> {" "}
      </ContainerWrapper>
    );
  } else {
    return (
      <ContainerWrapper completed>
        {" "}
        <IconWrapper>
          <CheckGreen />{" "}
        </IconWrapper>
        <TextStatus completed>Completed</TextStatus>{" "}
      </ContainerWrapper>
    );
  }
};
