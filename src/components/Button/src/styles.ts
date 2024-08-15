import styled, { css, keyframes } from "styled-components";

interface ButtonWrapperProps {
  size?: "lg" | "sm";
  isDisabled?: boolean;
  colorSpinner?: string;
  width?: string | number;
  variant?: "primary" | "outline" | "text";
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<ButtonWrapperProps>`
  width: 20px;
  height: 20px;
  border-width: 3px;
  border-top-width: 3px;
  border-radius: 50%;
  border-style: solid;
  border-top-style: solid;
  border-color: #dfdfe2;
  border-top-color: ${({ colorSpinner }) => colorSpinner};

  animation: ${spin} 1s linear infinite;
`;

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  padding: 12px 16px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  ${({ width }) => {
    if (typeof width === "number") {
      return css`
        width: ${width}px;
      `;
    } else {
      return css`
        width: ${width || "100%"};
      `;
    }
  }}
  height: ${({ size }) => (size === "lg" ? "48px" : "36px")};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  ${({ variant, isDisabled }) =>
    variant === "primary" &&
    css`
      background: ${isDisabled ? `#dfdfe2` : `#1e2347`};
      border-width: 0px;
      color: ${isDisabled ? "#7c7e8a" : `#FFF`};
      &:hover {
        background: ${isDisabled ? `#dfdfe2` : `#1564b0`};
      }

      &:focus {
        outline: 0;
        border-inline-end-width: 1px;
        border: ${isDisabled ? "none" : `0.8px solid #fff`};
        box-shadow: ${isDisabled ? "none" : `0 0 0 2px #105190`};
      }
    `}

  ${({ variant, isDisabled }) =>
    variant === "outline" &&
    css`
      border-width: 1px;
      border-style: solid;
      background: ${isDisabled ? `#FFF` : `#FFF`};
      color: ${isDisabled ? "#7c7e8a" : `#1e2347`};
      border-color: ${isDisabled ? "#7c7e8a" : `#1e2347`};
      &:hover {
        border-width: 1px;
        border-style: solid;
        background: ${isDisabled ? `#FFF` : `#FFF`};
        color: ${isDisabled ? "#7c7e8a" : `#1564b0`};
        border-color: ${isDisabled ? "#7c7e8a" : `#1564b0`};
      }
      &:focus {
        outline-offset: 0.8px;
        border-inline-end-width: 1px;
        outline: ${isDisabled ? "none" : `2px solid #105190`};
        box-shadow: ${isDisabled ? "none" : `0 0 0 2px #fff`};
      }
    `}

    ${({ variant, isDisabled }) =>
    variant === "text" &&
    css`
      background: transparent;
      border-width: 0px;
      color: ${isDisabled ? "#7C7E8A" : "#1e2347"};
      &:hover {
        background: ${isDisabled ? "none" : "#1564b014"};
        color: ${isDisabled ? "#7C7E8A" : "#1564b0"};
      }

      &:focus {
        outline: 0;
        border-inline-end-width: 1px;
        border-width: 1px;
        border-style: solid;
        border-color: #ffffff;
        box-shadow: ${isDisabled ? "none" : "0 0 0 2px #105190"};
      }
    `}
`;

export const TextButton = styled.span`
  font-family: "Figtree";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Loading = styled(Spinner)``;
export const Icon = styled.div`
  display: flex;
  margin-right: 4px;
`;
