import React from 'react';
import { HourglassIcon, Check, CheckGreen } from "../assets/images"; 
import { IconWrapper, TextResult, ContainerResultWrapper, IconResultWrapper , DefaultTagWrapper } from "../styles/dynamicTable.style";
import { capitalizeFirstLetter } from "../hooks/captalizer";

interface TagProps {
  value: any; // Pode ser number para status ou qualquer outro tipo para valores normais
  type?: 'status' | 'default'; // Tipo do valor: 'status' para colunas de status, 'default' para outros
}

const statusMap: Record<number, string> = {
  0: "pending",
  1: "approved",
  2: "canceled",
  3: "rejected",
  // Adicione outros mapeamentos conforme necessário
};

const Tag: React.FC<TagProps> = ({ value, type = 'default' }) => {
  if (type === 'status') {
    const statusValue = statusMap[value as number];
    const getIcon = (iconName: string) => {
      switch (iconName) {
        case "pending":
          return <IconWrapper><HourglassIcon /></IconWrapper>;
        case "approved":
        case "confirm":
          return <IconWrapper><CheckGreen /></IconWrapper>;
        case "canceled":
        case "cancel":
        case "reject":
        case "rejected":
          return <IconWrapper><Check /></IconWrapper>;
        default:
          return null;
      }
    };

    return (
      <ContainerResultWrapper resultValue={statusValue} width={165}>
        <IconResultWrapper>{getIcon(statusValue)}</IconResultWrapper>
        <TextResult resultValue={statusValue} weight={600}>
          {statusValue === "confirm" ? "Approved" : capitalizeFirstLetter(statusValue)}
        </TextResult>
      </ContainerResultWrapper>
    );
  }

  return <DefaultTagWrapper>{value}</DefaultTagWrapper>;
};

export default Tag;