import Link from "next/link";

import FlagIcon from "@/assets/svg/flag-timeline-icon.svg";
import { Timeline } from "@/components/Timeline";

export default function Timelines() {
  let stepNumber = 1;

  const TimelineMap = [
    {
      title: "Initiator",
    },
    {
      title: "Manager Approval",
    },
    {
      title: "HR Approval",
    },
    {
      title: "Infosec",
    },
    {
      title: "Help Desk",
    },
    {
      title: "Infra",
    },
    {
      title: "Initiator Notified",
    },
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 30, gap: 10 }}
    >
      <div style={{ padding: "10px 0px" }}>
        <h1>TimeLine</h1>
      </div>

      <div
        style={{
          gap: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Timeline.Root width={3}>
          {TimelineMap.map((item, index) => (
            <Timeline.Step key={index} icon={FlagIcon}>
              {stepNumber++}. {item.title}
            </Timeline.Step>
          ))}
        </Timeline.Root>
      </div>

      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
