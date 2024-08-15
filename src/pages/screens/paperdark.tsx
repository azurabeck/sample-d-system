import React from "react";
import Link from "next/link";
import PaperDark from "@/components/PaperDark/src/index";

export default function Papers() {
  return (
    <div>
      <div
        style={{
          gap: 16,
          padding: 30,
          display: "flex",
        }}
      >
        <PaperDark.Root width={300}>
          <PaperDark.Item title={"titulo"}>{"texto"}</PaperDark.Item>
          <PaperDark.Item title={"level"}>{"Peding"}</PaperDark.Item>
        </PaperDark.Root>
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
