import React from "react";
import { BadgeWrapper, BadgeText } from "./styles";

export interface BadgeProps {
  size?: number;
  color?: string;
  value: string;
}

const Badge: React.FC<BadgeProps> = ({
  value,
  size = 24,
  color = "#ca303d",
}) => {
  return (
    <BadgeWrapper color={color} size={size}>
      <BadgeText>{value}</BadgeText>
    </BadgeWrapper>
  );
};

export default Badge;
