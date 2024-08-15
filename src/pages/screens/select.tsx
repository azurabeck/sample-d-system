import { Select } from "@/components/Select/src";
import Link from "next/link";
import React, { useState } from "react";
export default function SelectComponent() {
  const array = [
    {
      _id: "1",
      label: "approved label",
      value: "approved",
    },
    {
      _id: "2",
      label: "rejected",
      value: "rejected",
    },
    {
      _id: "3",
      label: "client",
      value: "client",
    },
    {
      _id: "4",
      label: "successfully",
      value: "successfully",
    },
    {
      _id: "5",
      label: "modules",
      value: "modules",
    },
    {
      _id: "6",
      label: "compiled",
      value: "compiled",
    },
    {
      _id: "7",
      label: "event",
      value: "event",
    },
    {
      _id: "8",
      label: "options",
      value: "options",
    },
  ];

  const [disabled, setDisabled] = useState(false);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 30, gap: 10 }}
    >
      <button onClick={() => setDisabled(!disabled)}>teste</button>
      <div style={{ padding: "10px 0px" }}>
        <h1>SELECT</h1>
      </div>

      <div
        style={{
          gap: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Select
          options={array}
          placeholder="Selecione uma opção"
          defaultValue=""
          disabled={disabled}
          onChangeText={(e) => console.log("event", e)}
          error={false}
        />
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
