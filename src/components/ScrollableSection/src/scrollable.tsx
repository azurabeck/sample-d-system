import React from "react";
import { SectionWrapper, ScrollableContent, Content } from "./styles";

export interface ScrollableSectionProps {
  children?: React.ReactNode;
  size?: number;
}

const ScrollableSection: React.FC<ScrollableSectionProps> = ({
  children,
  size = 200,
  ...rest
}) => {
  return (
    <SectionWrapper size={size}>
      <ScrollableContent>
        <Content {...rest}>{children}</Content>
      </ScrollableContent>
    </SectionWrapper>
  );
};

export default ScrollableSection;
