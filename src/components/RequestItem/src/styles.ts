import styled from "styled-components";

interface RequestItemStyleProps {
  direction?: "row" | "column";
}

export const CardWrapper = styled.div<RequestItemStyleProps>`
  gap: 16px;
  width: 100%;
  padding: 24px;
  display: flex;
  border-radius: 8px;
  border: 1px dashed;
  align-items: center;
  justify-content: center;
  border-color: #b8b8b8;
  flex-direction: ${({ direction }) => direction};
`;
export const Text = styled.span`
  font-family: "Figtree";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.12px;
  color: #636574;
`;

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 0 2px #4289f5;
    border-inline-end-width: 1px;
    outline: 0;
  }
`;
