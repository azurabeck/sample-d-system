import styled from "styled-components";

export type CollapseStylePros = {
  isOpen?: boolean;
};

export const CollapseWrapper = styled.div`
  padding: 24px 0px 24px 0px;
  gap: 16px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  background: #f7f7f8;
  border-block: 1px solid #dbdbdb;
  width: 100%;
`;

export const Title = styled.a`
  font-family: "Figtree";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.12px;
  text-align: left;
  color: #484a55;
`;

export const CollapseContent = styled.div<CollapseStylePros>`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`;

export const TitleContainer = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`;
