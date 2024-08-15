import styled, { css } from "styled-components";
interface NoteStyleProps {
  arrow?: "top" | "left";
  elevation?: 0 | 1 | 2 | 3;
}

export const NoteWrapper = styled.div<NoteStyleProps>`
  flex: 1;
  width: 100%;
  height: 36px;
  display: flex;
  min-width: 90px;
  padding: 0px 10px;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: ${({ elevation }) => {
    switch (elevation) {
      case 0:
        return "0px 1px 2px rgba(37, 37, 39, 0.0)";
      case 1:
        return "0px 1px 2px rgba(37, 37, 39, 0.2)";
      case 2:
        return "0px 1px 2px rgba(37, 37, 39, 0.4)";
      case 3:
        return "0px 1px 2px rgba(37, 37, 39, 0.6)";
      default:
        return "0px 1px 2px rgba(37, 37, 39, 0.1)";
    }
  }};
`;

export const Arrow = styled.div<NoteStyleProps>`
  ${({ arrow }) =>
    arrow === "top" &&
    css`
      width: 0;
      height: 0;
      position: absolute;
      margin: -8px 0px 0px 20px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #ffffff;
    `}
  ${({ arrow }) =>
    arrow === "left" &&
    css`
      width: 0;
      height: 0;
      position: absolute;
      margin: 10px 0px 0px -17px;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 8px solid #ffffff;
    `}
`;

export const Container = styled.div`
  gap: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextNote = styled.span<NoteStyleProps>`
  width: 100%;
  font-family: "Figtree";
  text-align: left;
  letter-spacing: 0.12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ arrow }) =>
    arrow === "top" &&
    css`
      color: #ca303d;
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
    `};
  ${({ arrow }) =>
    arrow === "left" &&
    css`
      color: #484a55;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    `};
`;
