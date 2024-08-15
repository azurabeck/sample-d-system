import styled, { css } from "styled-components";

interface StatusStyleProps {
  width?: number | string;
  color: "pending" | "approved" | "partial" | "rejected" | "completed";
}

const backgrounds = {
  pending: "#F9EDE6",
  approved: "#E6F2EE",
  completed: "#E6F2EE",
  partial: "#FAE9B5",
  rejected: "#FBEAEA",
};
const colors = {
  pending: "#AA4500",
  approved: "#006D49",
  completed: "#006D49",
  partial: "#826809",
  rejected: "#CA303D",
};

export const Wrapper = styled.div<StatusStyleProps>`
  gap: 4px;
  height: 33px;
  display: flex;
  border-radius: 4px;
  background: ${({ color }) => backgrounds[color]};
  padding: 6px 8px 6px 8px;

  ${({ width }) => {
    if (typeof width === "number") {
      return css`
        width: ${width}px;
      `;
    } else {
      return css`
        width: ${width};
      `;
    }
  }}
`;

export const StatusText = styled.span<StatusStyleProps>`
  font-family: "Figtree";
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.12px;
  text-align: left;
  color: ${({ color }) => colors[color]};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
