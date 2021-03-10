import React, { useState } from "react";
import { ExampleCardView } from "./ExampleCardView";
export function ExampleCard({}) {
  const [test, setTest] = useState("test");

  return (
    <div>
      {test}
      <ExampleCardView />
    </div>
  );
}
