import React from "react";
import * as S from "./styles";
import { RootProps } from "./types";

const TimelineRoot: React.FC<RootProps> = ({ children, width = 3 }) => {
  return (
    <S.TimelineWrapper>
      <S.StepList>
        {children}
        <S.Divider width={width} />
      </S.StepList>
    </S.TimelineWrapper>
  );
};

export default TimelineRoot;
