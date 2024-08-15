import styled, { css } from "styled-components";

interface NotificationStyleProps {
  border?: string;
  color:
    | "primary"
    | "information"
    | "error"
    | "success"
    | "warning"
    | "cancel"
    | "reject"
    | "reschedule";
  minHeight?: string;
}

const background = {
  primary: "#FFFFFF",
  error: "#FBEAEA",
  reject: "#FBEAEA",
  cancel: "#FBEAEA",
  success: "#e6f2ee",
  warning: "#FEF8E8",
  reschedule: "#FEF8E8",
  information: "#e8f2fa",
};

const borders = {
  primary: "#DBDBDB",
  information: "transparent",
  error: "transparent",
  reject: "transparent",
  cancel: "transparent",
  success: "transparent",
  warning: "transparent",
  reschedule: "transparent",
};

export const Wrapper = styled.div<NotificationStyleProps>`
  gap: 16px;
  display: flex;
  border-radius: 4px;
  padding: 12px 15px;
  flex-direction: column;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ color }) => borders[color]};
  background: ${({ color }) => background[color]};
  ${({ border }) =>
    border &&
    css`
      border-color: ${border};
    `}
  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight};
    `}
`;

export const TextNotification = styled.span`
  font-family: "Figtree";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.12px;
  color: #484a55;
`;

export const TitleNotification = styled(TextNotification)`
  font-weight: 600;
`;

export const Container = styled.div`
  gap: 16px;
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
