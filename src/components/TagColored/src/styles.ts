import styled, { css } from "styled-components";

interface TagcoloredStyleProps {
  color?: string;
  background?: string;
  type: "primary" | "secondary" | "tertiary";
}

const backgroundcolor = {
  primary: "#C75300",
  secondary: "#1C77CF",
  tertiary: "#FAE9B5",
};

const colors = {
  primary: "#FFF",
  secondary: "#FFF",
  tertiary: "#826809",
};

export const TagColor = styled.div<TagcoloredStyleProps>`
  height: 20px;
  display: flex;
  padding-inline: 10px;
  border-radius: 16px;
  background: ${({ type }) => backgroundcolor[type]};
  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}
`;

export const TagText = styled.span<TagcoloredStyleProps>`
  display: flex;
  font-size: 12px;
  font-weight: 600;
  text-align: left;
  line-height: 18px;
  align-items: center;
  font-family: "Figtree";
  color: ${({ type }) => colors[type]};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;
