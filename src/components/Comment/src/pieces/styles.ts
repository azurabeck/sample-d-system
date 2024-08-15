import styled from "styled-components";
import { CommetStyleProps } from "./type";

export const Wrapper = styled.div`
  gap: 8px;
  width: 100%;
  display: flex;
`;
export const AvatarContainer = styled.div<CommetStyleProps>`
  width: 40px;
  height: 40px;
  display: flex;
  flex-shrink: 0;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => (color)};;
`;
export const AvatarText = styled.span`
  font-size: 14px;
  color: #ffffff;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  font-family: "Figtree";
  letter-spacing: 0.12px;
`;
export const CommentContainer = styled.div`
  gap: 16px;
  width: 100%;
  border: 1px;
  display: flex;
  border-radius: 8px;
  padding: 12px 16px;
  background: #ffffff;
  flex-direction: column;
  border: 1px solid #dbdbdb;
`;
export const TextComment = styled.span<CommetStyleProps>`
  font-family: "Figtree";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.12px;
  text-align: left;
  color: ${({ light }) => (light ? "#636574" : "#484a55")};
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;
export const EmptyCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f8;
  border: 1px solid #dbdbdb;
  gap: 8px;
  padding: 12px 0 12px 0;
  border-radius: 8px;
`;
export const EmptyTitleCommentBox = styled.div`
  font-family: "Figtree";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.12px;
  color: #636574;
`;

