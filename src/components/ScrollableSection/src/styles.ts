import styled from "styled-components";

interface ScrollableStyleProps {
  size?: number;
}

export const SectionWrapper = styled.section<ScrollableStyleProps>`
  width: 100%;
  height: ${({ size }) => size}px;
`;
export const ScrollableContent = styled.div`
  height: 100%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b8b8b8;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f7f7f8;
  }
`;

export const Content = styled.div``;
