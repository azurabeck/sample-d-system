import React from "react";
import { Div, Text } from "./styles";
import { PaperDarkItemProps } from "./type";

const PaperDarkItem: React.FC<PaperDarkItemProps> = ({ title, children }) => {
  return (
    <Div>
      <Text>{title}</Text>
      <Text bold>{children}</Text>
    </Div>
  );
};

export default PaperDarkItem;
