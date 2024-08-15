import styled, { css } from "styled-components";

interface PaperStyleProps {
  width?: string | number;
}
export const PaperWrapper = styled.div<PaperStyleProps>`
  display: flex;
  border-radius: 4px;
  padding: 12px 16px;
  align-items: center;
  background: #ffffff;
  justify-content: space-between;
  box-shadow: 0px 1px 2px rgba(37, 37, 39, 0.1);
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

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
`;

export const TitlePaper = styled.a`
  display: flex;
  font-size: 14px;
  color: #636574;
  font-weight: 400;
  line-height: 21px;
  font-style: normal;
  letter-spacing: 0.12px;
  font-family: "Figtree";
`;

export const Text = styled.span`
  font-size: 16px;
  color: #484a55;
  font-weight: 600;
  line-height: 24px;
  font-style: normal;
  letter-spacing: 0.12px;
  font-family: "Figtree";
  width: 99%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
