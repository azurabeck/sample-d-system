import React from "react";
import Link from "next/link";
import { useState } from "react";
import { RadioButton } from "@/components/RadioButton/src";
import { Text } from "@/components/Text/src";
export default function RadioButtons() {
  // const [selecionado, setSelecionado] = useState(false);
  const [value, setValue] = useState("");

  // const handleSelecao = () => {
  //   setSelecionado(!selecionado);
  // };

  const array = [
    {
      label: "Exceeds Expectations",
      value: "exceedsExpectations",
    },
    {
      label: "Needs Expectations",
      value: "needsExpectations",
    },
    {
      label: "Meets Expectations",
      value: "meetsExpectations",
    },
  ];
  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 30, gap: 10 }}
    >
      <div style={{ padding: "10px 0px" }}>
        <h1>RADIO BUTTON</h1>
        <h5>props RadioButton component</h5>
      </div>
      <Text>RadioButton Accessibility</Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // gap: 15,
        }}
      >
        <RadioButton
          id="radio"
          name="radio_button"
          styleType="square"
          options={array}
          error={true}
        ></RadioButton>
        <RadioButton
          id="radio"
          name="radio_button"
          styleType="normal"
          onChangeChecked={() => {
            setValue("exceedsExpectations");
          }}
          defaultChecked={"exceedsExpectations" === value}
          defaultValue={"exceedsExpectations"}
        >
          Exceeds Expectations
        </RadioButton>
        <RadioButton
          // value={2}
          id="radio"
          name="radio_button"
          styleType="normal"
          // checked={selecionado}
          // onChange={handleSelecao}
          onChangeChecked={() => {
            setValue("meetsExpectations");
          }}
          defaultChecked={"meetsExpectations" === value}
          defaultValue={"meetsExpectations"}
        >
          Meets Expectations
        </RadioButton>
      </div>
      <Text>RadioButton States</Text>
      <div
        style={{
          gap: 15,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <RadioButton styleType="normal" checked={true}>
          RadioButton checked = true
        </RadioButton>
        <RadioButton styleType="normal" checked={false}>
          RadioButton checked = false
        </RadioButton>
        <RadioButton styleType="normal" checked={true} disabled>
          RadioButton checked = true
        </RadioButton>
        <RadioButton styleType="normal" checked={false} disabled>
          RadioButton checked = false
        </RadioButton>
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
