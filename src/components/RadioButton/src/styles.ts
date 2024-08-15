import styled, { css } from "styled-components";

interface RadioButtonStyleProps {
  isDisabled?: boolean;
  isFocused?: boolean;
  checked?: boolean;
  isFirstItem?: boolean;
  isLastItem?: boolean;
  error?: boolean;
}

export const RadioButtonWrapper = styled.label<RadioButtonStyleProps>`
  display: flex;
  max-width: 100%;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};

  input[type="radio"] {
    margin-right: 8px;
    width: 18px;
    height: 18px;
    min-width: 18px;
    min-height: 18px;
    border-radius: 50%;
    outline: none;
    appearance: none;
    background: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ isDisabled }) => (isDisabled ? "#DBDBDB" : "#8A8C98")};
    transition: all 0.3s ease;
    cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};

    &:checked {
      background: ${({ isDisabled }) => (isDisabled ? "#9496A0" : "#1e2347")};
      border-color: ${({ isDisabled }) => (isDisabled ? "#DBDBDB" : "#1e2347")};
      box-shadow: inset 0 0 0 3px #ffffff;
    }

    &:focus {
      outline: 2px solid #4289f5;
      outline-offset: 0.5px;
    }
  }
`;

export const Text = styled.span<RadioButtonStyleProps>`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  font-family: "Figtree";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ isDisabled }) => (isDisabled ? "#7C7E8A" : "#484a55")};
`;

export const TextSquare = styled.span<RadioButtonStyleProps>`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  font-family: "Figtree";
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ isDisabled }) => (isDisabled ? "#7C7E8A" : "#484a55")};
  padding: 25px;
  border-right: ${({ isLastItem }) =>
    isLastItem ? "none" : "1px solid #dbdbdb"};
  max-width: 170px;
  text-align: center;

  ${({ isLastItem, error }) =>
    !isLastItem &&
    error &&
    css`
      border-right: 1px solid #ca3d3d;
    `}

  ${({ checked }) =>
    checked === true &&
    css`
      background-color: #0b3e70;
      color: white;
    `}

  ${({ isFirstItem }) =>
    isFirstItem &&
    css`
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    `}

  ${({ isLastItem }) =>
    isLastItem &&
    css`
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    `}
`;

export const IconError = styled.div`
  bottom: 30px;
  left: 515px;
  position: absolute;
  top: -2px;
  height: 0px;
`;

export const ErrorText = styled.div`
  margin-left: 6px;
  color: #ca3d3d;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  line-height: 21px;
  font-family: "Figtree";
  letter-spacing: 0.12px;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
`;
