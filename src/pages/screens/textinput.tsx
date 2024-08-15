import React from "react";
import Link from "next/link";
import { useState } from "react";
import { TextInput } from "@/components/TextInput";

export default function TextInputs() {
  const [value] = useState(
    "teste do value components text adiciona um elipssses apenas para testar quando ou se estiver com ainda deve ter mais texto aqui para que possa mostrar realmente o que vai aparecer ou nao dentro do component que estamos usando aqui vou inserir um pouco mais so para comparaçao"
  );
  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 30, gap: 10 }}
    >
      <div style={{ padding: "10px 0px" }}>
        <h1>TEXT INPUT</h1>
      </div>

      <div
        style={{
          gap: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h4>Text Input</h4>
        <TextInput
          type="text"
          placeholder="Email"
          onChangeText={(e) => console.log(e)}
        />
        <TextInput type="password" placeholder="Password" />
        <TextInput
          type="text"
          placeholder="mask"
          mask
          onChangeText={(e) => console.log(e)}
        />
        <br />

        <h4>Text Input Disabled</h4>
        <TextInput
          type="text"
          placeholder="Email"
          disabled
          error
          value={value}
        />
        <TextInput type="password" placeholder="Password" disabled />
        <TextInput
          mask
          defaultValue="1000,00"
          placeholder="Password"
          disabled
        />
        <br />

        <h4>Text Input Error</h4>
        <TextInput type="text" placeholder="Email" error width={250} />
        <TextInput type="password" placeholder="Password" error />

        <br />
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
