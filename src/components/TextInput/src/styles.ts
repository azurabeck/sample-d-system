import styled, { css } from "styled-components";

interface TextInputStyleProps {
  isError?: boolean;
  isDisabled?: boolean;
  type?: "text" | "password";
  width?: number | string;
}

export const InputContainer = styled.div`
  display: flex;
`;
export const Wrapper = styled.div<TextInputStyleProps>`
  gap: 4px;
  display: flex;
  position: relative;
  flex-direction: column;
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
`;

export const InputField = styled.input<TextInputStyleProps>`
  width: 100%;
  font-size: 16px;
  padding-inline: 12px;
  height: 36px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  background: #ffffff;
  border-color: #8a8c98;
  font-family: "Figtree";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.12px;
  text-align: left;

  padding-right: ${({ type }) => (type === "text" ? "12" : "35")}px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #1e2347;

  &::placeholder {
    color: #636574;
  }

  &:focus {
    outline: 2px solid #4289f5;
    border-radius: 2px;
    border: none;
  }

  &:disabled {
    background: #f7f7f8;
    border-color: #b8b8b8;
    color: #b8b8b8;
    padding-right: 14px;
    cursor: not-allowed;
    &::placeholder {
      color: #b8b8b8;
    }
  }

  ${({ isError }) =>
    isError &&
    css`
      border-color: #ca3d3d;
      padding-right: 34px;
    `}

  ${({ isError, type }) =>
    isError &&
    type === "password" &&
    css`
      border-color: #ca3d3d;
      padding-right: 65px;
    `}
`;

export const IconLeft = styled.div<TextInputStyleProps>`
  top: 50%;
  height: 24px;
  right: 12px;
  cursor: pointer;
  position: absolute;
  transform: translateY(-50%);
  &:focus {
    outline: 2px solid #4289f5;
  }
`;

export const IconError = styled.div<TextInputStyleProps>`
  top: 55%;
  position: absolute;
  transform: translateY(-50%);
  right: ${({ isError }) => (isError ? "12" : "40")}px;
`;
