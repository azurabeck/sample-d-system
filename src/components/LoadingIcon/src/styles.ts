import styled, { keyframes } from "styled-components";
interface LoadingProps {
  size?: number;
  color?: string;
  border?: number;
  background?: string;
}

export const Container = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<LoadingProps>`
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

export const Img = styled.div`
  position: absolute;
  transform: translate(1%, 5%);
`;
