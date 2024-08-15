import React from "react";
import { PaperWrapper } from "./styles";
import { PaperDarkRootProps } from "./type";

const PaperDarkRoot: React.FC<PaperDarkRootProps> = ({
  children,
  width = "100%",
}) => {
  return <PaperWrapper width={width}>{children}</PaperWrapper>;
};

export default PaperDarkRoot;
