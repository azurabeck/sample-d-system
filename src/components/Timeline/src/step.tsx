import React from "react";
import * as S from "./styles";
import { TimelineProps } from "./types";

const TimelineStep: React.FC<TimelineProps> = ({ icon, children }) => {
  return (
    <S.StepItem>
      {icon}
      <S.Text>{children}</S.Text>
    </S.StepItem>
  );
};

export default TimelineStep;
