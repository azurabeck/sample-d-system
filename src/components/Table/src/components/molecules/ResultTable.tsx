import React from "react";
import {HourglassIcon, Check, CheckGreen} from "../../assets/index";
import {
  ContainerResultWrapper,
  IconResultWrapper,
  IconWrapper,
  TextResult,
} from "../../tableStyle";
import { capitalizeFirstLetter } from "../../utils/captalizer"

export interface IResultTableProps {
  name: string;
}

export const ResultTable = (props: IResultTableProps) => {
  const { name } = props;
  console.log(props)

  const getIcon = (iconName: string) => {
    if (iconName === "pending") {
      return <IconWrapper><HourglassIcon /></IconWrapper> ;
    }

    if (iconName === "approved" || name === "confirm") {
      return <IconWrapper><CheckGreen /></IconWrapper> ;
    }

    if (
      iconName === "canceled" ||
      iconName === "cancel" ||
      iconName === "reject" ||
      iconName === "rejected"
    ) {
      return <IconWrapper><Check /></IconWrapper>;
    }

    // Retorne um ícone padrão ou null aqui
    return null;
  };

  if (name && name !== "") {
    return (
      <ContainerResultWrapper
        resultValue={name.toLocaleLowerCase()}
        width={165}
      >
        <IconResultWrapper>
          {getIcon(name.toLocaleLowerCase())}
        </IconResultWrapper>

        <TextResult resultValue={name.toLocaleLowerCase()} weight={600}>
          {name === "confirm" ? "Approved" : capitalizeFirstLetter(name)}
        </TextResult>
      </ContainerResultWrapper>
    );
  } else {
    return (
      <TextResult color="#636574" weight={400}>
        -
      </TextResult>
    );
  }
};