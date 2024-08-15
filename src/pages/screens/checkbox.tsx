import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Text } from "@/components/Text/src";
import { Checkbox } from "@/components/CheckBox";
export default function RadioButtons() {
  const [selecionado, setSelecionado] = useState(false);

  const handleSelecao = () => {
    setSelecionado(!selecionado);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 30, gap: 10 }}
    >
      <div style={{ padding: "10px 0px" }}>
        <h1>CHECKBOX</h1>
        <h5>props Checkbox component</h5>
      </div>
      <Text>Checkbox Accessibility</Text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Checkbox
          id="1"
          value={1}
          name="checkbox"
          // checked={selecionado}
          // onChange={handleSelecao}
        >
          Checkbox select 1
        </Checkbox>
        <Checkbox
          id="1"
          value={1}
          name="checkbox"
          // checked={!selecionado}
          // onChange={handleSelecao}
        >
          Checkbox select 2
        </Checkbox>
      </div>
      <Text>Checkbox States</Text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Checkbox checked={true}>Checkbox checked = true</Checkbox>
        <Checkbox checked={false}>Checkbox checked = false</Checkbox>
        <Checkbox checked={true} disabled>
          Checkbox checked = true ; disabled
        </Checkbox>
        <Checkbox checked={false} disabled>
          Checkbox checked = false ; disabled
        </Checkbox>
      </div>

      <Text>isFocused (boolean): disabled the focus</Text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Checkbox
          id="1"
          value={1}
          name="checkbox"
          checked={selecionado}
          onChange={handleSelecao}
          isFocused
        >
          Checkbox select 1
        </Checkbox>
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
