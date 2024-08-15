import styled, { css } from "styled-components";

type CardStyleProps = {
  border?: boolean;
  size: "small" | "medium" | "large";
  weight?: number;
};

type ImgStyleProps = {
  src?: string;
  width?: string;
  height?: string;
};

export const CardBorder = styled.div<CardStyleProps>`
  padding: 24px 24px;
  justify-content: center;
  justify-items: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  ${({ border }) =>
    border === true &&
    css`
      width: 100%;
      display: flex;
      border-radius: 8px;
      border: 1px solid;
      background: #ffffff;
      border-color: #dbdbdb;
    `}
  ${({ size }) =>
    size === "small" &&
    css`
      width: 100%;
      display: block;
      padding: 0px 10px;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0px 1px 2px 0px #2525270f;
      border: none;
    `}
`;

export const CardBody = styled.div<CardStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ size }) =>
    size === "small" &&
    css`
      justify-content: space-between;
      flex-direction: row;
    `}
`;

export const CardImgDiv = styled.div``;

export const CardImg = styled.img<ImgStyleProps>`
  src: src;
  width: 50px;
  height: 50px;
`;

export const CardText = styled.div<CardStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0px;
  ${({ size }) =>
    size === "small" &&
    css`
      align-items: flex-start;
      min-width: 112px;
      padding: 10px 0px;
    `}
`;

export const CardTitle = styled.h4<CardStyleProps>`
  letter-spacing: 0.12px;
  line-height: 30px;
  font-weight: 600;
  font-size: 20px;
  color: #1e2347;
  font-family: "Figtree";

  ${({ size }) =>
    size === "small" &&
    css`
      line-height: 21px;
      font-weight: 400;
      font-size: 14px;
      color: #636574;
    `}
`;

export const CardSubTitle = styled.p<CardStyleProps>`
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.12px;
  color: #636574;
  font-family: "Figtree";
  margin-right: 5px;

  ${({ size }) =>
    size === "small" &&
    css`
      line-height: 24px;
      font-weight: 600;
      font-size: 16px;
      color: #484a55;
      max-width: calc(100% + 112px);
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      line-height: 24px;
      font-weight: 600;
      font-size: 16px;
      color: #484a55;
      max-width: calc(100% + 112px);
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export const CardInfo = styled.span`
  font-weight: 500;
`;

export const CardSubTitleArea = styled.div`
  display: flex;
`;
