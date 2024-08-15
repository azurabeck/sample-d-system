import styled from "styled-components";

export type SwitchStyleProps = {
  colorOn?: boolean;
};

export const SwitchInput = styled.input`
  height: 0px;
  width: 0px;
  visibility: hidden;
`;

export const SwitchLabel = styled.label<SwitchStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 42px;
  height: 24px;
  border-radius: 100px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ colorOn }) => (colorOn ? "#1C77CF" : "#8A8C98")};
  position: relative;
  transition: background-color 0.2s;
  background-color: ${({ colorOn }) => (colorOn ? "#1C77CF" : "#8A8C98")};
`;

export const SwitchButton = styled.span<SwitchStyleProps>`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 45px;
  transition: 0.2s;
  background: #ffffff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
  ${SwitchLabel}:active & {
    width: 22px;
  }
`;
