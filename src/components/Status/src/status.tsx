import React from "react";
import * as S from "./styles";

import CheckRedIcon from "./assets/check-red.svg";
import HourglassIcon from "./assets/hourglass.svg";
import CheckGreenIcon from "./assets/check-green.svg";
import CheckYellowIcon from "./assets/check-yellow.svg";

interface StatusProps {
  width?: number | string;
  children?: React.ReactNode;
  type?: "pending" | "approved" | "partial" | "rejected" | "completed";
}

const Status: React.FC<StatusProps> = ({
  children,
  width,
  type = "approved",
}) => {
  const iconMap = {
    pending: <HourglassIcon />,
    approved: <CheckGreenIcon />,
    completed: <CheckGreenIcon />,
    partial: <CheckYellowIcon />,
    rejected: <CheckRedIcon />,
  };

  const IconComponent = iconMap[type];

  return (
    <S.Wrapper color={type} width={width}>
      <S.Icon>{IconComponent}</S.Icon>
      <S.StatusText color={type}>{children}</S.StatusText>
    </S.Wrapper>
  );
};

export default Status;
