import Link from "next/link";

import { Status } from "@/components/Status";
import { TableStep } from "@/components/TableStep";
import { TableStepArray } from "@/mock/usersApprovers";
import FlagIcon from "@/assets/svg/flag-timeline-icon.svg";

const columtitle = ["Participant", "Completed", "Status", "Result", "Comments"];

export default function TableSteps() {
  const userApprovers = TableStepArray.data.usersApprovers;

  const typeMap: {
    [key: string]: string;
    pending: string;
    approved: string;
    partial: string;
    rejected: string;
  } = {
    pending: "pending",
    approved: "approved" || "completed",
    partial: "partial",
    rejected: "rejected",
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 30, gap: 10 }}
    >
      <h3>TableStep</h3>
      <div>
        <TableStep.Root>
          {/*  */}
          <TableStep.Title src={FlagIcon}>1. Initiator</TableStep.Title>

          <TableStep.Columns>
            {columtitle.map((columns , index) => (
              <TableStep.Line key={index}>{columns}</TableStep.Line>
            ))}
          </TableStep.Columns>
          {userApprovers.map((item , index) => (
            <TableStep.Body key={index}>
              <TableStep.Item>{item.userNameFull}</TableStep.Item>
              <TableStep.Item>{item.createdAt}</TableStep.Item>
              <TableStep.Item>
                {item?.status && (
                  <Status type={typeMap[item.status]} width={164}>
                    {item?.status}
                  </Status>
                )}
              </TableStep.Item>
              <TableStep.Item>
                {item?.result && (
                  <Status type="partial" width={164}>
                    {item?.result}
                  </Status>
                )}
              </TableStep.Item>
              <TableStep.Item>{item.comments}</TableStep.Item>
            </TableStep.Body>
          ))}
          {/*  */}
        </TableStep.Root>
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
