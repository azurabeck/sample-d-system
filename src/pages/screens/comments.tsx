import Link from "next/link";
import { Comment } from "@/components/Comment/src";
import React from "react";

interface Comment {
  Id: string;
  RequestId: string;
  Text: string;
  User: string;
  CreatedAt: string;
}

const data: Comment[] = [
  {
    Id: 1,
    RequestId: "A",
    User: "Jose Paulino",
    CreatedAt: "11/7/2023, 3:23 PM",
    Text:
      " Please double-check if employee will be located in New York or Aventura.",
  },
  {
    Id: 2,
    RequestId: "A",
    User: "Jose Paulino",
    CreatedAt: "11/7/2023, 3:23 PM",
    Text:
      " Please double-check if employee will be located in New York or Aventura.",
  },
  {
    Id: 3,
    RequestId: "A",
    User: "Nilton Cezar",
    CreatedAt: "11/7/2023, 3:23 PM",
    Text:
      " Please double-check if employee will be located in New York or Aventura.",
  },
  {
    Id: 4,
    RequestId: "A",
    User: "Nilton Cezar",
    CreatedAt: "11/7/2023, 3:23 PM",
    Text:
      " Please double-check if employee will be located in New York or Aventura.",
  },
  {
    Id: 5,
    RequestId: "A",
    User: "Ronald Guilherme",
    CreatedAt: "11/7/2023, 3:23 PM",
    Text:
      " Please double-check if employee will be located in New York or Aventura.",
  },
  {
    Id: 6,
    RequestId: "A",
    User: "Ronald Guilherme",
    CreatedAt: "11/7/2023, 3:23 PM",
    Text:
      " Please double-check if employee will be located in New York or Aventura.",
  },
];

export default function Papers() {
  return (
    <div>
      <div
        style={{
          gap: 10,
          padding: 30,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Comment data={data} />
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
