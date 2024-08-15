import React from "react";
import { TextWapper } from "./styles";

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children, ...rest }) => {
  return <TextWapper {...rest}>{children}</TextWapper>;
};

export default Text;
