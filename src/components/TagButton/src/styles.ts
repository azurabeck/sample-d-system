import styled from "styled-components";

interface TagStyleProps {
  active?: boolean;
  br?: "round" | "square";
}

export const TagWrapper = styled.button<TagStyleProps>`
  border: 1px;
  width: 100%;
  display: flex;
  cursor: pointer;
  padding: 8px;
  align-items: center;
  border-style: solid;
  justify-content: center;
  border-radius: ${({ br }) => (br === "round" ? "16" : "4")}px;
  background: ${({ active }) => (active ? "#1e2347" : "#ffffff")};
  border-color: ${({ active }) => (active ? "#1e2347" : "#8a8c98")};

  &:focus {
    outline: 0;
    border: 0.8px solid #fff;
    border-inline-end-width: 1px;
    box-shadow: 0 0 0 2px #105190;
  }
`;

export const TagText = styled.span<TagStyleProps>`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.12px;
  font-family: "Figtree";
  color: ${({ active }) => (active ? "#ffffff" : "#2e2f37")};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconContainer = styled.div`
  display: flex;
`;
