import { Card } from "@/components/Card/src";
import Link from "next/link";
import React, { useState } from "react";
import user from "@/assets/svg/user.svg";
export default function CardComponent() {
  const [disabled, setDisabled] = useState(false);

  const array = [
    {
      title: "Period",
      border: false,
      size: "medium",
      img: user,
      subTitle: "2023",
      status: {
        type: "approved",
        text: "Completed",
      },
    },
    {
      title: "Employee Name",
      border: true,
      size: "medium",
      img: user,
      subTitle: "Gabrielle Know",
      subTitleInfo: "Due Date 28 Feb 2024",
      status: {
        type: "approved",
        text: "Completed",
      },
    },
    {
      title: "2022",
      border: true,
      size: "small",
      img: user,
      subTitle: "Completed on 09/12/2022",
      status: {
        type: "approved",
        text: "Completed",
      },
    },
    {
      title: "2022",
      border: true,
      size: "small",
      img: user,
      subTitle: "Completed on 09/12/2022",
      status: {
        type: "approved",
        text: "Completed",
      },
    },
    {
      title: "2022",
      border: true,
      size: "small",
      img: user,
      subTitle: "Completed on 09/12/2022",
      status: {
        type: "pending",
        text: "Pending",
      },
    },
    {
      title: "2022",
      border: true,
      size: "small",
      // img: user,
      subTitle: "Completed on 09/12/2022",
      status: {
        type: "pending",
        text: "Pending",
      },
    },
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 30, gap: 10 }}
    >
      <button onClick={() => setDisabled(!disabled)}>teste</button>
      <div style={{ padding: "10px 0px" }}>
        <h1>Card</h1>
      </div>

      <div
        style={{
          gap: 10,
          display: "grid",
          flexDirection: "row",
          gridTemplateColumns: "repeat(auto-fill,minmax(400px,1fr))",
        }}
      >
        {array.map((item) => (
          <Card
            key={item.title}
            border={item.border}
            size={item.size}
            subTitleInfo={item.subTitleInfo}
            title={item.title}
            img={item.img}
            subTitle={`${item.subTitle} - `}
            status={item.status}
          />
        ))}
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
