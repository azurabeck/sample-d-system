import styled, { css } from "styled-components";

type SelectProps = {
  isError?: boolean;
};

export const SelectContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Select = styled.select<SelectProps>`
  width: 100%;
  height: 36px;
  border: 1px solid;
  padding-left: 10px;
  border-radius: 4px;
  background: #ffffff;
  border-color: #8a8c98;

  color: #636574;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  font-style: normal;

  option {
    &:hover {
      background-color: blue;
      color: white;
    }
  }

  &:disabled {
    color: #b8b8b8;
    background: #f7f7f8;
    border-color: #b8b8b8;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid #4289f5;
    border-radius: 2px;
    border: none;
  }
  ${({ isError }) =>
    isError &&
    css`
      border-color: #ca3d3d;
    `}
`;

export const IconError = styled.div`
  top: 55%;
  position: absolute;
  transform: translateY(-50%);
  right: 28px;
`;
