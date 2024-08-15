import React from "react";
import Link from "next/link";
import { Text } from "@/components/Text/src";
import { Button } from "@/components/Button/src";
import ICON from "@/assets/svg/close-white.svg";

export default function Buttons() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 30, gap: 10 }}
    >
      <div style={{ padding: "10px 0px" }}>
        <h1>BUTTON</h1>
        <h5>props button component</h5>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <h3>variant: primary | outline | text</h3>
        <Text>Primary</Text>
        <Button variant="primary" onClick={() => console.log("PRIMARY")}>
          Button
        </Button>
        <Text>Outline</Text>
        <Button variant="outline" onClick={() => console.log("OUTLINE")}>
          Button
        </Button>
        <Text>Text</Text>
        <Button variant="text" onClick={() => console.log("TEXT")}>
          Button
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <h3>disabled: boolean</h3>
        <Text>Primary</Text>
        <Button
          variant="primary"
          disabled
          onClick={() => console.log("DISABLED")}
        >
          Button
        </Button>
        <Text>Outline</Text>
        <Button
          variant="outline"
          disabled
          onClick={() => console.log("DISABLED")}
        >
          Button
        </Button>
        <Text>Text</Text>
        <Button variant="text" disabled onClick={() => console.log("DISABLED")}>
          Button
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <h3>loading: boolean</h3>
        <Text>Primary</Text>
        <Button variant="primary" loading>
          Button
        </Button>
        <Text>Outline</Text>
        <Button variant="outline" size="sm" loading>
          Button
        </Button>
        <Text>Text</Text>
        <Button variant="text" loading>
          Button
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <h3>src: ReactNode</h3>
        <Text>Button Icon</Text>
        <Button icon={ICON} iconSize={15}>
          Button
        </Button>
      </div>

      <h3>width: string</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <Button width={100}>100px</Button>
        <Button width={200}>200px</Button>
        <Button width={300}>300px</Button>
        <Button width={600}>600px</Button>
      </div>

      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
