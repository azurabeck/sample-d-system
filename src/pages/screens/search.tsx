import React from "react";
import Link from "next/link";
import { Search } from "@/components/Search";

export default function TextInputs() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 30,
        gap: 10,
      }}
    >
      <div style={{ padding: "10px 0px" }}>
        <h1>Search</h1>
      </div>

      <div
        style={{
          gap: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h4>Search - Manager</h4>
        
        <Search
          baseUrl="https://api.dev.k8s.safra.int/"
          pathUrl={"v1/user-management/getmanager?name="}
          fieldKey={'managerName'}
          defaultValue="Marcelo Cantero"
          onSelectItem={(item) => console.log("Data Manager: ", item)}
        ></Search>

        <Search
          baseUrl="https://api.dev.k8s.safra.int/"
          pathUrl={"v1/user-management/getmanager?name="}
          fieldKey={'managerName'}
          onSelectItem={(item) => console.log("Data Manager: ", item)}
        ></Search>
        <br />
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
