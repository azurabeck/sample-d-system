import styled from "styled-components";

export const EmailWrapper = styled.div`
  gap: 16px;
  display: flex;
  font-family: "Figtree";
  flex-direction: column;
`;
export const TitleEmail = styled.a`
  font-size: 18px;
  color: #484a55;
  font-weight: 600;
  text-align: left;
  line-height: 27px;
  font-family: "Figtree";
  letter-spacing: 0.12px;
`;
export const ContainerEmail = styled.div`
  gap: 8px;
  width: 100%;
  display: flex;
  border-radius: 8px;
  align-items: center;
  background: #f7f7f8;
  padding: 16px 0px 16px 16px;
`;
export const TextBold = styled.a`
  font-size: 16px;
  color: #636574;
  text-align: left;
  font-weight: 600;
  line-height: 24px;
  font-family: "Figtree";
  letter-spacing: 0.12px;
`;
export const Text = styled.a`
  font-size: 16px;
  color: #636574;
  text-align: left;
  font-weight: 400;
  line-height: 24px;
  font-family: "Figtree";
  letter-spacing: 0.12px;
`;
export const DownloadLink = styled.a`
  display: flex;
  cursor: pointer;
  font-size: 16px;
  color: #1564b0;
  font-weight: 400;
  text-align: left;
  line-height: 24px;
  align-items: center;
  font-family: "Figtree";
  letter-spacing: 0.12px;
  text-decoration: none;
`;
export const BodyEmail = styled.div`
  border: 1px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  min-height: 200px;
  font-family: "Figtree";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.12px;
  text-align: left;
  color: #636574;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #636574;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #636574;
  }
`;
