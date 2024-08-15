import styled, { keyframes } from "styled-components";

interface LoadingStyleProps {
  size?: number;
  background?: string;
  color?: string;
  border?: number;
}
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<LoadingStyleProps>`
  border-radius: 50%;
  border-style: solid;
  border-top-style: solid;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-width: ${({ border }) => border}px;
  border-top-width: ${({ border }) => border}px;
  border-color: ${({ background }) => background};
  border-top-color: ${({ color }) => color};

  animation: ${spin} 1s linear infinite;
`;
