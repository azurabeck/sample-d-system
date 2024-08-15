import styled, { css } from "styled-components";
import { PaperStyleProps } from "./type";

export const PaperWrapper = styled.div<PaperStyleProps>`
  display: flex;
  border-radius: 4px;
  padding: 12px 16px;
  background: #f7f7f8;
  justify-content: space-between;
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

export const Div = styled.div`
  margin-right: 10px;
`;

export const Text = styled.span<PaperStyleProps>`
  display: flex;
  color: #636574;
  font-size: 14px;
  line-height: 21px;
  font-style: normal;
  align-items: center;
  letter-spacing: 0.12px;
  font-family: "Figtree";
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
`;
