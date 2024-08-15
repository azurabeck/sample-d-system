import styled, { css } from "styled-components";
interface CheckboxStyleProps {
  isDisabled?: boolean;
  isFocused?: boolean;
}

export const CheckboxContainer = styled.label<CheckboxStyleProps>`
  display: flex;
  align-items: center;
  max-width: 100%;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
`;

export const CheckboxInput = styled.input<CheckboxStyleProps>`
  appearance: none;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ isDisabled }) => (isDisabled ? "#DBDBDB" : "#8a8c98")};
  border-radius: 4px;
  margin-right: 10px;
  background-color: ${({ isDisabled }) => (isDisabled ? "#F7F7F8" : "#FFFFFF")};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};

  ${({ isFocused, isDisabled }) =>
    isFocused === false &&
    css`
      &:focus {
        outline: 0;
        border-inline-end-width: 1px;
        box-shadow: ${isDisabled ? "none" : "0 0 0 2px #4289f5"};
      }
    `}

  &:checked {
    border-color: ${({ isDisabled }) => (isDisabled ? "#9496A0" : "#1e2347")};
    background-color: ${({ isDisabled }) =>
      isDisabled ? "#9496A0" : "#1e2347"};
  }

  &:checked::before {
    content: "✓";
    color: #fff;
    margin-left: 4px;
  }
`;

export const CheckboxLabel = styled.span<CheckboxStyleProps>`
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ isDisabled }) => (isDisabled ? "#7C7E8A" : "#484a55")};
`;
