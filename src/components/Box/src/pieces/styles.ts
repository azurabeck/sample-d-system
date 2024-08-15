import styled, { css } from "styled-components";

interface BoxStyleProps {
  isRequired?: boolean;
  errorBox?: boolean;
}
export const Wrapper = styled.div<BoxStyleProps>`
  gap: 16px;
  width: 100%;
  display: flex;
  padding: 16px 24px;
  border-radius: 8px;
  border: 1px solid;
  background: #ffffff;
  border-color: #dbdbdb;
  flex-direction: column;
  ${({ isRequired }) =>
    isRequired === true &&
    css`
      border: 1px solid #ca3d3d;
    `}
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.span`
  font-size: 18px;
  color: #636574;
  font-weight: 600;
  text-align: left;
  line-height: 27px;
  font-family: "Figtree";
  letter-spacing: 0.12px;
`;
export const ErrorContainer = styled.div<BoxStyleProps>`
  gap: 5px;
  display: flex;
  align-items: center;
  ${({ errorBox }) =>
    errorBox &&
    css`
      justify-content: flex-end;
    `}
`;
export const TextError = styled.span`
  color: #ca3d3d;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  line-height: 21px;
  font-family: "Figtree";
  letter-spacing: 0.12px;
`;

export const ChildrenContainer = styled.div`
  display: flex;
`;
