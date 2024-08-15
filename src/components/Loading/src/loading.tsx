import React from "react";
import { Spinner } from "./styles";

export interface LoadingProps {
  size?: number;
  border?: number;
  background?: string;
  spinnerColor?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = 20,
  border = 3,
  background = "#dfdfe2",
  spinnerColor = "#1e2347",
}) => {
  return (
    <Spinner
      size={size}
      background={spinnerColor}
      color={background}
      border={border}
    />
  );
};

export default Loading;
