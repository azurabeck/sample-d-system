/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Link from "next/link";
import { TextArea } from "@/components/TextArea";

export default function TextAreas() {
  const maxLength = 100;

  const answer = "Testando";
  const [disable, setDisable] = useState(false);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 30, gap: 10 }}
    >
      <div style={{ padding: "10px 0px" }}>
        <h1>TEXTAREA</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <span>Textarea Enabled</span>
        <button onClick={() => setDisable(!disable)}> Disable button</button>

        <TextArea
          maxLength={maxLength}
          label="Please provide any additional information to support your request."
          error={true}
          enableDigitalCount={true}
          defaultValue={answer}
          disabled={disable}
        />
        <span>Textarea Disabled</span>

        <TextArea
          maxLength={maxLength}
          label="Digite seu texto:"
          error={false}
          enableDigitalCount={false}
          disabled
        />

        <span>Textarea Error</span>

        <TextArea
          maxLength={maxLength}
          label="Digite seu texto:"
          error={true}
        />
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
