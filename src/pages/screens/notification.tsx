import React from "react";
import Link from "next/link";
import { Text } from "@/components/Text/src";
import { Notification } from "@/components/Notification/src";
export default function Notifications() {
  const status = "REJECTED";
  // const status = "APPROVED";

  const types = status === "REJECTED" ? "error" : "success";

  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 30, gap: 10 }}
    >
      <div style={{ padding: "10px 0px" }}>
        <h1>NOTIFICATION</h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Text>Primary</Text>

        <Notification type="primary">
          Approved by <b>CharlotteP</b> on <b>2/14/2023, 10:22 AM</b>
        </Notification>

        <Notification title="Infrastructure" type="primary">
          Approved by <b>CharlotteP</b> on <b>2/14/2023, 10:22 AM</b>
        </Notification>

        <Text>Information</Text>

        <Notification type="information">
          Approved by <b>CharlotteP</b> on <b>2/14/2023, 10:22 AM</b>
        </Notification>

        <Notification title="Infosec" type="information">
          Approved by <b>CharlotteP</b> on <b>2/14/2023, 10:22 AM</b>
        </Notification>

        <Text>Warning</Text>

        <Notification type="warning" border="#FAE9B5">
          Approved by <b>CharlotteP</b> on <b>2/14/2023, 10:22 AM</b>
        </Notification>

        <Notification title="Help Desk" type="warning">
          Approved by <b>CharlotteP</b> on <b>2/14/2023, 10:22 AM</b>
        </Notification>

        <Text>Success</Text>

        <Notification type="success">
          Approved by <b>CharlotteP</b> on <b>2/14/2023, 10:22 AM</b>
        </Notification>

        <Notification title="Manager Approval" type="success">
          Approved by <b>CharlotteP</b> on <b>2/14/2023, 10:22 AM</b>
        </Notification>

        <Text>Error</Text>
        <Notification type="error" border="#F0BABB">
          Approved by <b>CharlotteP</b> on <b>2/14/2023, 10:22 AM</b>
        </Notification>

        <Notification type="error" border="#F0BABB">
          Approved by <b>CharlotteP</b> on <b>2/14/2023, 10:22 AM</b>
        </Notification>
        <Notification title="HR Approval" type={types}>
          Canceled by <b>PrestonF</b> on <b>2/15/2023, 9:41 PM.</b>
        </Notification>
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
