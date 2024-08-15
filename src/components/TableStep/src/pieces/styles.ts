import styled, { css } from "styled-components";

interface TableStepStyleProps {
  thin?: boolean;
}

export const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  border-radius: 8px;
  box-sizing: border-box;
  flex-direction: column;
  border: 2px solid #f7f7f8;
`;

export const StepTitleWrapper = styled.div`
  gap: 12px;
  display: flex;
  padding: 12px 16px;
  align-items: center;
  flex-direction: row;
  align-items: center;
  background: #f7f7f8;
`;

export const Text = styled.span<TableStepStyleProps>`
  flex: 1;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  font-style: normal;
  align-items: center;
  letter-spacing: 0.12px;
  font-family: "Figtree";
  color: #484a55;

  overflow: hidden;

  ${({ thin }) =>
    thin &&
    css`
      font-weight: 400;
    `}
`;

export const StepGridItem = styled.div`
  gap: 5px;
  display: flex;
  padding: 12px 16px;
  flex-direction: row;
  align-items: flex-start;
`;

export const Divider = styled.div`
  margin: 0px 10px;
  border-bottom: 1px solid #dbdbdb;
`;
