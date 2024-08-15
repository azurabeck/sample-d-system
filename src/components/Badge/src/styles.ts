import styled from "styled-components";

interface BadgeStyleProps {
  color?: string;
  size?: number;
}

export const BadgeWrapper = styled.div<BadgeStyleProps>`
  display: flex;
  border-radius: 50%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ color }) => color};
`;

export const BadgeText = styled.span`
  display: flex;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  font-style: normal;
  align-items: center;
  font-family: "Figtree";
  letter-spacing: 0.12px;
`;
