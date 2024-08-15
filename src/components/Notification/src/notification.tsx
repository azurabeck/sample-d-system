import React from "react";

import WarningIcon from "./assets/warning-color.svg";
import * as CheckCircleIcon from "./assets/check-circle-color.svg";
import ErrorCircleIcon from "./assets/error-circle-color.svg";
import RescheduleIcon from "./assets/renew.svg";

import { Wrapper, Container, Div, Icon, TextNotification, TitleNotification } from "./styles";

export interface NotificationProps {
  title?: string;
  border?: string;
  minHeight?: string;
  note?: React.ReactNode;
  children?: React.ReactNode;
  type?:
    | "primary"
    | "information"
    | "error"
    | "success"
    | "warning"
    | "cancel"
    | "reject"
    | "reschedule";
}

const Notification: React.FC<NotificationProps> = ({
  note,
  title,
  children,
  border,
  type = "primary",
  minHeight,
}) => {
  const iconMap = {
    primary: <CheckCircleIcon />,
    information: <CheckCircleIcon />,
    error: <ErrorCircleIcon />,
    cancel: <ErrorCircleIcon />,
    reject: <ErrorCircleIcon />,
    success: <CheckCircleIcon />,
    warning: <WarningIcon />,
    reschedule: <RescheduleIcon />,
  };

  const IconComponent = iconMap[type];

  return (
    <>
      <Wrapper color={type} border={border} minHeight={minHeight}>
        {title && <TitleNotification>{title}</TitleNotification>}
        <Container>
          <Div>
            <Icon>{IconComponent}</Icon>
            <TextNotification>{children}</TextNotification>
          </Div>
          {note && <Div>{note}</Div>}
        </Container>
      </Wrapper>
    </>
  );
};

export default Notification;
