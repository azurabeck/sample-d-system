import React from "react";
import {
  BodyEmail,
  ContainerEmail,
  DownloadLink,
  EmailWrapper,
  Text,
  TextBold,
  Textarea,
  TitleEmail,
} from "./styles";

import { EmailIcon } from "./assets/email";
import { AttatchtmentIcon } from "./assets/attatchtment";

export type EmailProps = {
  message?: string;
  senderName?: string;
  subjectName?: string;
  attachments?: Record<string, string>[];
};

const Email: React.FC<EmailProps> = ({
  attachments,
  senderName,
  subjectName,
  message,
}) => {
  return (
    <EmailWrapper>
      <ContainerEmail>
        <EmailIcon />
        <TitleEmail>Instruction Email</TitleEmail>
      </ContainerEmail>

      <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
        <div>
          <TextBold>Sender: </TextBold>
          <Text>{senderName}</Text>
        </div>
        <div>
          <TextBold>Subject: </TextBold>
          <Text>{subjectName}</Text>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <TextBold>Attachments: </TextBold>
        {attachments?.map((document) => (
          <div style={{ display: "flex", marginInline: 4 }}>
            <DownloadLink
              href={document.href}
              download={document.href}
              target="_blank"
            >
              <AttatchtmentIcon />
              {document.name}
            </DownloadLink>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
        <TextBold>Message:</TextBold>
        <BodyEmail>
          <Textarea value={message} disabled />
        </BodyEmail>
      </div>
    </EmailWrapper>
  );
};

export default Email;
