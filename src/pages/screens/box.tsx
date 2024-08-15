import React from "react";
import Link from "next/link";
import { Box } from "@/components/Box/src";
import { Checkbox } from "@/components/CheckBox/src";

export default function BoxPage() {
  return (
    <div>
      <div>
        <Box.Root error={true}>
          <Box.Body error={true} errorMessage="Please select.">
            {/*  */}
            <div>
              <Checkbox>Network</Checkbox>
              <Checkbox>Network</Checkbox>
            </div>
            {/*  */}
          </Box.Body>
        </Box.Root>
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
