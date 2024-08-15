import React, { useEffect, useState } from "react";
import { Switch } from "@snb/ds-switch";
import { Tooltip } from "@snb/ds-tooltip";
import {
  CollapseContent,
  Title,
  TitleContainer,
  CollapseWrapper,
} from "./styles";
import { InfoIcon } from "./assets/info";

export type CollapseProps = {
  children?: React.ReactNode;
  title?: string;
  checked?: boolean;
  tooltip?: string;
};

const Collapse: React.FC<CollapseProps> = ({
  children,
  title,
  checked = false,
  tooltip,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(checked);

  useEffect(() => {
    setIsOpen(checked);

    return () => {};
  }, [checked]);

  const onChangeSwitch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CollapseWrapper>
      <TitleContainer>
        <Switch checked={isOpen} onClick={() => onChangeSwitch()} />
        <Title>{title}</Title>
        <Tooltip title={tooltip}>
          <InfoIcon />
        </Tooltip>
      </TitleContainer>
      <CollapseContent isOpen={isOpen}>{children}</CollapseContent>
    </CollapseWrapper>
  );
};

export default Collapse;
