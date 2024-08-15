import Link from "next/link";
import React from "react";
import { DatePicker } from "@/components/DatePicker/src";

export default function Variants() {

  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 30, gap: 10 }}
    >
      <div style={{ padding: "10px 0px" }}>
        <h1>DATAPICKER</h1>
      </div>
      <div
        style={{
          gap: 15,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DatePicker
          // onChangeDate={(e) => {}}
          // disabled={input?.disabled}
          // error={isError}
          // defaultValue={input.answer}
        />
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
