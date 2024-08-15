import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        style={{
          padding: 30,
        }}
      >
        <h2>COMPONENTS</h2>

        <div
          style={{
            gap: 10,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link href="screens/button">Button</Link>
          <Link href="screens/radiobutton">Radio Button</Link>
          <Link href="screens/checkbox">Checkbox</Link>
          <Link href="screens/notification">Notification</Link>
          <Link href="screens/textarea">Textarea</Link>
          <Link href="screens/variants">Geral</Link>
          <Link href="screens/pdfviewer">pdfviewer</Link>
          <Link href="screens/textinput">Text Input</Link>
          <Link href="screens/select">select</Link>
          <Link href="screens/timeline">timeline</Link>
          <Link href="screens/paper">paper</Link>
          <Link href="screens/paperdark">paperDark</Link>
          <Link href="screens/tablestep">tablestep</Link>
          <Link href="screens/comments">coments</Link>
          <Link href="screens/datapicker">datapicker</Link>
          <Link href="screens/box">box</Link>
          <Link href="screens/search">search</Link>
          <Link href="screens/card">Card</Link>
        </div>
      </div>
    </>
  );
}
