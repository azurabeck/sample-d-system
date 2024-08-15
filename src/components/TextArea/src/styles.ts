import styled, { css } from "styled-components";

interface ITextAreaParams {
  isDisabled?: boolean;
  isError?: boolean;
}

export const Textarea = styled.textarea<ITextAreaParams>`
  display: flex;
  padding: 12px;
  width: 100%;
  height: 115px;
  background: ${({ isDisabled }) => (isDisabled ? "#F7F7F8" : "#ffffff")};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ isDisabled }) => (isDisabled ? "#B8B8B8" : "#636574")};
  border-radius: 4px;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "auto")};

  &:focus {
    border-inline-end-width: 1px;
    outline: 0;
    border-width: ${({ isDisabled }) => (isDisabled ? "1" : "2")}px;
    border-style: solid;
    caret-color: ${({ isDisabled }) => (isDisabled ? "transparent" : "auto")};
    border-color: ${({ isDisabled }) => (isDisabled ? "#B8B8B8" : "#4289f5;")};
  }

  ${(props) =>
    props.isError === true &&
    css`
      border: 1px solid #ca3d3d;
    `}

  font-family: "Figtree";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.12px;
  color: #636574;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span`
  font-family: "Figtree";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.12px;
  color: #636574;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Number = styled.span`
  font-family: "Figtree";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.12px;
  color: #636574;
`;

export const Icon = styled.div`
  top: 40%;
  right: 20px;
  position: absolute;
  transform: translateY(-50%);
`;

export const ContainerWrapper = styled.div`
  gap: 4px;
  display: flex;
  position: relative;
  flex-direction: column;
`;
